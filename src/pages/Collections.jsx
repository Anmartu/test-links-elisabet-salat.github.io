import { useLocation} from 'react-router-dom'
import '../stylesheets/collections.css'
// import '../stylesheets/index.css'
import {Link} from "react-router-dom";
import { useEffect } from 'react';


let arr = ['cat', 'esp', 'eng']
export const [Collections, Collections_es, Collections_en] = arr.map(() => {
  
  return ({ind, lng, indc}) => {
    // let loc = indc.map(item => item.indexOf(location.pathname.split('/').pop()))
    // loc = loc.filter(item => item !== -1)
    // if (loc.length > 1) {
    //   loc.pop() 
    // } if (loc.length > 1) {
    //   loc.pop()
    // }
    // let col_d = ind.ca.col_t[loc][1].map(item => item.replace('%20',' ').replace('%C3%A8','è').replace('%C3%AD', 'í') )

    // console.log(loc)
    // console.log(indc)
    // console.log(ind[lng])
    // console.log(ind['ca'].col_t)

    console.log(ind.ca.col_t[0][1].length)
    let path = ind[lng].nav[2].toLowerCase()
    return (
    <>
    {/* <h1>{ind[lng].nav[2]} </h1> */}
    <ul className='list-col'> 
        {ind.ca.col_t.map((n,i) => {

        let col_p = ind[lng].col[i].replace(/\s/g,'-').toLowerCase()
        return (
          <li className='col-item' key={col_p}>
            <Link to={`${ind[lng].nav[0]}/${path}/${col_p}`}> 
              <div className='col-container'>
                <h2 className='col-title'>{ind[lng].col[i]}</h2>
                <img src={`/public/col/${n[0]}/${n[1][0]}.jpg` }alt={ind[lng].col[i]}></img> 
                <span className='col-data'>{`x ${ind.ca.col_t[i][1].length}`}</span>
              </div>
            </Link>
          </li> 
        )
        })}
    </ul>
    </>
  )}
})

