import '../stylesheets/projects.css'

import {Link} from "react-router-dom";

let arr = ['cat', 'esp', 'eng']
export const [Projects, Projects_es, Projects_en] = arr.map(() => {
  return ({ind, lng}) => {
    let path = ind[lng].nav[3].toLowerCase()
    return (
    <>
    <h1>{ind[lng].nav[3]} </h1>
  <ul> 
    {ind['ca'].prj.map(prj => {
      let prj_p = prj.replace(/\s/g,'-').toLowerCase()
      return <li key={prj_p}><Link to={`${ind[lng].nav[0]}/${path}/${prj_p}`}>{prj}</Link></li> })}
  </ul>
  </>
  )}
})


