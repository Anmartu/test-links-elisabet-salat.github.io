import { useState, useEffect } from 'react'
import { Link, Route, Routes, useNavigate, Navigate, useLocation} from 'react-router-dom'
import {Home, Home_en, Home_es, NoPage} from "./pages/Home";
import {Collections, Collections_es, Collections_en} from "./pages/Collections";
import {CollectionD, CollectionD_es, CollectionD_en} from "./pages/CollectionD";
import {ProjectD, ProjectD_es, ProjectD_en} from "./pages/ProjectD";
import {Projects, Projects_es, Projects_en} from "./pages/Projects";
import {Process, Process_es, Process_en} from "./pages/Process";
import {Curriculum, Curriculum_es, Curriculum_en} from "./pages/Curriculum";
import {Contact, Contact_es, Contact_en} from "./pages/Contact";
import content from './assets/content.json'
import ChangeLng from './components/ChangeLng'
import Cookies from 'universal-cookie'
import {Logo, Facebook, Insta } from './components/Icons'
import { Burger } from './components/Burger';

function App() {

const cookie = new Cookies();

let value
if (navigator.cookieEnabled) {
    value = cookie.get('lng')
  if(!cookie.get('lng')){
    cookie.set('lng', 'ca', {path: '/', maxAge: 3600*24*3600})
    value = cookie.get('lng')
  } 
} else {
  value = 'ca'
}

const [input, setInput] = useState(value)

let index = []
content[input].nav.map( item => {
  index.push(item)
  index.push(item.toLowerCase())
})

const [,r,home,, collections, collections_p, projects, projects_p, process, process_p, curriculum, curriculum_p, contact, contact_p] = index

let index_cp = [[],[...content.ca.prj.map(item=> item.replace(/\s/g,'-').toLowerCase())]]
Object.entries(content).map(([,item]) => {
index_cp[0].push(item.col.map(item => item.replace(/\s/g,'-').toLowerCase()))
} )

const navigate = useNavigate()

useEffect(()=>{
  if (!navigator.cookieEnabled){
    if (location.pathname.startsWith('/es/') && input !== 'es') {
      document.querySelector('#select').click()
      document.querySelectorAll('#hidden > ul > li > button')[0].click()
    } else if (location.pathname.startsWith('/en/') && input !== 'en') {
      document.querySelector('#select').click()
      document.querySelectorAll('#hidden > ul > li > button')[1].click()
    }
  }

},[])

useEffect(()=>{
  let arr = location.pathname.split('/')
 
  if (arr[1] =='en' || arr[1] =='es' ) arr.shift()
  else arr[0] = 'ca'

  if(arr[0] !== input) {
    console.log('canviii', input)
    navigate(location.pathname)
    setInput(arr[0])
    console.log(arr[0] == input)
    cookie.set('lng', arr[0], {path: '/', maxAge: 3600*24*3600})
  } else {
    let nav = content[input].nav.map(n => n.toLowerCase())
    console.log('nav: ', nav, 'arr: ', arr)
    let loc = nav.indexOf(arr[1].replace('%C3%A9','é').replace('%C2%B7','·').replace('%C3%AD','í'))-2
    console.log('indexOf: ',arr[1].replace('%C3%A9','é').replace('%C2%B7','·').replace('%C3%AD','í'))
    let navItems = document.querySelectorAll('.naveg > li')
    console.log('loc: ', loc)
    console.log('navItems: ', navItems)
    if (arr[1]) {
      navItems[loc].classList.add('visited')
      navItems.forEach(n => {
        if (n.className=='visited' && n != navItems[loc] ) n.classList.remove('visited')
      })
    } else (navItems.forEach(n => n.classList.remove('visited')))

  }

})


return (
    <>
    <header>
    <nav className='nav'>
    <div id='top'>
      <div id='logo'><Link to={`${r}/`}><Logo/></Link></div>
      <Burger />
    </div>
      <ul className='naveg'>
        <li><Link to={`${r}/${collections_p}`}>{collections}</Link></li>
        <li><Link to={`${r}/${projects_p}`}>{projects}</Link></li>
        <li><Link to={`${r}/${process_p}`}>{process}</Link></li>
        <li><Link to={`${r}/${curriculum_p}`}>{curriculum}</Link></li>
        <li><Link to={`${r}/${contact_p}`}>{contact}</Link></li>
      </ul>
    <ChangeLng input={input} setInput={setInput} value={value} index={index}/>
    </nav>
    </header>
    <div className='container'>
  
    <Routes>
      <Route path='/' element={ <Home ind={content} lng={'ca'}/>}/>
      <Route path='/col·leccions' element={ <Collections ind={content} lng={'ca'} indc={index_cp[0]} />}/>
      <Route path='/col·leccions/:nom' element={<CollectionD ind={content} indc={index_cp[0]} lng={'ca'}/>}/>
      <Route path='/projectes' element={<Projects ind={content} lng={'ca'} />}/>
      <Route path='/projectes/:nom' element={<ProjectD ind={content} indp={index_cp[1]} lng={'ca'}/>}/>
      <Route path='/procés' element={<Process ind={content} lng={'ca'}/>}/>
      <Route path='/currículum' element={<Curriculum ind={content} lng={'ca'}/>}/>
      <Route path='/contacte' element={<Contact ind={content} lng={'ca'}/>}/>
      
      <Route path='/es/' element={ <Home_es ind={content} lng={'es'}/>}/>
      <Route path='/es/colecciones' element={<Collections_es ind={content} lng={'es'} indc={index_cp[0]}/>}/>
      <Route path='/es/colecciones/:nom' element={<CollectionD_es ind={content} indc={index_cp[0]} lng={'es'}/>}/>
      <Route path='/es/proyectos' element={<Projects_es ind={content} lng={'es'} />}/>
      <Route path='/es/proyectos/:nom' element={<ProjectD_es ind={content} indp={index_cp[1]} lng={'es'}/>}/>
      <Route path='/es/proceso' element={<Process_es ind={content} lng={'es'}/>}/>
      <Route path='/es/currículum' element={<Curriculum_es ind={content} lng={'es'}/>}/>
      <Route path='/es/contacto' element={<Contact_es ind={content} lng={'es'} />}/>
      
      <Route path='/en/' element={ <Home_en ind={content} lng={'en'}/>}/>
      <Route path='/en/collections' element={<Collections_en ind={content} lng={'en'} indc={index_cp[0]}/>}/>
      <Route path='/en/collections/:nom' element={<CollectionD_en ind={content} indc={index_cp[0]} lng={'en'}/>}/>
      <Route path='/en/projects' element={<Projects_en ind={content} lng={'en'}/>}/>
      <Route path='/en/projects/:nom' element={<ProjectD_en ind={content} indp={index_cp[1]} lng={'en'}/>}/>
      <Route path='/en/process' element={<Process_en ind={content} lng={'en'}/>}/>
      <Route path='/en/curriculum' element={<Curriculum_en ind={content} lng={'en'}/>}/>
      <Route path='/en/contact' element={<Contact_en ind={content} lng={'en'}/>}/>
     
      <Route path='*' element={ value=='es' ? <Navigate to='/es/'/> : value=='ca' ? <Navigate to='/'/> : <Navigate to='/en'/> }/>
      
    </Routes>
    </div>
    <footer>
      <div className='xarxes'>
        <div id='mail'>
          <a href="mailto:elisabetsalat@yahoo.es">
            <div id='line'></div> elisabetsalat@yahoo.es
          </a>
        </div>
      <ul>
				<li>
          <a className='social' href="https://www.instagram.com/andreu.martorell/"><Facebook/> </a>
        </li>
				<li> 
          <a className='social' href="https://www.facebook.com/Andreu-Martorell-101890385143452"><Insta/>  </a>
        </li>
		  </ul>
      </div>
      <div id='credits'>
        <div>
          {content[input].extra[0]}<a href='https://andreumartorell.com/'> Andreu Martorell</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
