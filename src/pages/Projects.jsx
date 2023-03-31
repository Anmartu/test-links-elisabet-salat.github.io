import '../stylesheets/projects.css'

import {Link} from "react-router-dom";

let arr = ['cat', 'esp', 'eng']
export const [Projects, Projects_es, Projects_en] = arr.map(() => {
  return ({ind, lng}) => {
    console.log(ind.ca.prj[0].toLowerCase())

    let path = ind[lng].nav[3].toLowerCase()

   


    return (
    <>
    {/* <h1>{ind[lng].nav[3]} </h1> */}
    <ul className='list-prj'> 
      {ind.ca.prj.map((n,i) => {
        let prj_p = n.replace(/\s/g,'-').toLowerCase()
        return (
        <li key={prj_p} className='prj-item'>
          <Link to={`${ind[lng].nav[0]}/${path}/${prj_p}`}>
            {/* <h2>{n}</h2> */}
            <img src={`/proj/${prj_p}/${prj_p}-1.jpg`} alt={ind.ca.prj[i]} />
          </Link>
        </li> ) })}
    </ul>
  </>
  )}
})


