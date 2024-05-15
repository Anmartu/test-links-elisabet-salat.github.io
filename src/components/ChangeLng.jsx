import {useNavigate, redirect} from 'react-router-dom'
import Cookies from 'universal-cookie'
import content from '../assets/content.json'
import { useState, useEffect } from 'react'
import '../stylesheets/select.css'
import { Select } from './Select'
import { Arrow } from './Icons'

const ChangeLng = ({input, setInput, value, index}) => {

  const cookie = new Cookies();

  let entries = [[],[],[]]
  let loc = []
  let loc2 = []
  let n , lost, lng, i

  if (input=='ca') lng = 0
  else if (input=='es') lng = 1
  else lng = 2

  Object.entries(content).map(([,item]) => item).map(item => {
    entries[0].push(item.nav.map(item => item.toLowerCase())) 
    entries[1].push(item.col.map(item => item.replace(/\s/g,'-').toLowerCase())) 
    entries[2].push(item.prj.map(item => item.replace(/\s/g,'-').toLowerCase()))
  })


  let path = window.location.pathname.split('/')

  path.shift()


  if ((path[0] == 'es' || path[0] == 'en') && path[1] !== '') path.shift()


  path = path.map(item => {
    if (item === 'en' || item ==='es') item = '/' + item
    return item.replace("%C2%B7", "·").replace("%C3%A9","é").replace("%C3%AD","í").replace("%C3%B3","ó")
  })

  if(path[0] == 'projectes' || path[0] == 'proyectos' || path[0] == 'projects' ){
    n = 2 ; lost = 7
  } else {
    n = 1 ; lost = 5
  }

  entries[0].map(item => {
    if (item.indexOf(path[0]) !== -1) loc.push(item.indexOf(path[0]))
  })

  if ( path[0] && path[1] ) entries[n].map(item => {
      if (item.indexOf(path[1]) !== -1) loc2.push(item.indexOf(path[1])) 
    })

  if (loc.length > 1) loc.pop()
  if (loc2.length > 1) loc2.pop()
  if (loc2.length > 1) loc2.pop()

  const navigate = useNavigate();

    const change = e => {
      if (e.target.name == 'ca') i = 0
      else if (e.target.name == 'es') i = 1
      else i = 2

      if (loc == 0) navigate(`${entries[0][i][0]}/`);
      if (path[0] && path[1] ) navigate(`${entries[0][i][0]}/${entries[0][i][loc]}/${entries[n][i][loc2]}`);
      if (loc > 0 && (!path[1] || path[1] == '')) navigate(`${entries[0][i][0]}/${entries[0][i][loc]}`);

      setInput(e.target.name)
      if (navigator.cookieEnabled) cookie.set('lng', e.target.name, {path: '/', maxAge: 3600*24*3600})
    }

  return (
    <>
    <div className="select">{input.toUpperCase()}
      <Arrow/>
      <div id="hidden">
        <Select leng={input} change={change}/>
      </div>
      </div>
    </>
  )
}

export default ChangeLng