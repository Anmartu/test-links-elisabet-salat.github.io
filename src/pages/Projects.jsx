import '../stylesheets/projects.css'
import { useEffect } from 'react';
import {Link} from "react-router-dom";

let arr = ['cat', 'esp', 'eng']
export const [Projects, Projects_es, Projects_en] = arr.map(() => {
  return ({ind, lng}) => {
    let path = ind[lng].nav[3].toLowerCase()

    return (
    <>
    <div className='prj-container'>
    <p className='prj-intro'>{ind[lng].prj_d[0]}</p>
    <ul className='list-prj'> 
      {ind.ca.prj.map((n,i) => {
        let prj_p = n.replace(/\s/g,'-').toLowerCase()
        return (
        <li key={prj_p} className='prj-item'>
          <Link to={`${ind[lng].nav[0]}/${path}/${prj_p}`}>
            <img src={`/proj/_proj/${prj_p}.jpg`} alt={ind.ca.prj[i]} />
          </Link>
        </li> ) })}
    </ul>
    </div>
  </>
  )}
})


