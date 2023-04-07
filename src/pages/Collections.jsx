import { useLocation} from 'react-router-dom'
import '../stylesheets/collections.css'
import {Link} from "react-router-dom";
import { useEffect } from 'react';


let arr = ['cat', 'esp', 'eng']
export const [Collections, Collections_es, Collections_en] = arr.map(() => {
  
  return ({ind, lng, indc}) => {

    // console.log(ind.ca.col_t[0][1].length)
    let path = ind[lng].nav[2].toLowerCase()
    return (
    <>
    <ul className='list-col'> 
        {ind.ca.col_t.map((n,i) => {

        let col_p = ind[lng].col[i].replace(/\s/g,'-').toLowerCase()
        // console.log(`${ind[lng].nav[0]}/${path}/${col_p}`)
        return (
          <li className='col-item' key={col_p}>
            <Link to={`${ind[lng].nav[0]}/${path}/${col_p}`}> 
              <div className='col-container'>
                <h2 className='col-title'>{ind[lng].col[i]}</h2>
                <img src={`/col/${n[0]}/${n[1][0]}.jpg` }alt={ind[lng].col[i]}></img> 
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

