import content from '../assets/content.json'
import '../stylesheets/projects_d.css'
import { useEffect } from 'react'

let arr = ['cat', 'esp', 'eng']
export const [ProjectD, ProjectD_es, ProjectD_en] = arr.map(() => {
  return ({ind,lng, indp}) => {
    let loc = indp.indexOf(location.pathname.split('/').pop())
    let arr = []
    for (let i = 0; i < ind.ca.prj_i[loc]; i++) {
      arr.push(i)
    }
console.log(loc)
  useEffect(() => {
    if(loc == 1) {
    let var2_4 = document.querySelectorAll('.prj-d-img')
    console.log(var2_4[10])
    var2_4[10].classList.add('var-2-4')
    }

  },[])

    return (
    <>
    <img className='prj-d-pic' src={`/proj/${indp[loc]}/${indp[loc]}-1.jpg`} alt={`${indp[loc]}-img-1`} />
    <div className='prj-d-data'>
      <h1 className='title-prj-d'>{ind['ca'].prj[loc]}</h1>
      {ind[lng].prj_d[loc + 1].map( (n,i) => <p key={i}> { n } </p> )}
    </div>
    <div className='prj-d-img-container'>
      {arr.map((n,i) => {
        if (i > 1) return <img key={i} className='prj-d-img' src={`/proj/${indp[loc]}/${indp[loc]}-${i}.jpg`} alt={`${indp[loc]}-img-${i}`} />
        
      })}
    </div>

    
    </>
  )}
})