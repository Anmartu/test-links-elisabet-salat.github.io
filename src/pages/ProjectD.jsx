import content from '../assets/content.json'
import '../stylesheets/projects_d.css'
import { Fragment, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NoPage } from './Home'
import { Projects } from './Projects'

let arr = ['ca', 'es', 'en']
export const [ProjectD, ProjectD_es, ProjectD_en] = arr.map(() => {
  return ({ind,lng, indp}) => {

  let params = useParams()

  console.log(params)

  if (indp.indexOf(params.nom) != -1) {

    let loc = indp.indexOf(location.pathname.split('/').pop().replace('%C3%AD','í'))
    let arr_i = []
    for (let i = 0; i <= ind.ca.prj_i[loc]; i++) {
      arr_i.push(i)
    }
    
      useEffect(() => {
        let img = document.querySelectorAll('.prj-d-img')
        if (loc == 0) {
          img[1].classList.add('img-2-4','img-h')
          img[6].classList.add('img-2-4')
          img[7].classList.add('img-1-3')
        } 
        else if(loc == 1) {
          img[5].classList.add('img-2-4')
          img[7].classList.add('img-1-3')
          }
        else if (loc == 2) {
          img[0].classList.add('img-2-4')
          img[2].classList.add('img-2-4')
          }
        else if (loc == 3) {
          img[3].classList.add('img-2-4','img-p-r')
          img[4].classList.add('img-a-r')
        }
        else if (loc == 4) {
          img[0].classList.add('img-2')
          img[6].classList.add('img-1-4','img-ar0')
          img[12].classList.add('img-3-r7')
        }
        else if (loc == 5) {
          img[7].classList.add('img-2-4','img-h')
          img[12].classList.add('img-2-4','img-h')
        }
        else if (loc == 6) {
          img[3].classList.add('img-1-4','img-h')
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
      {arr_i.map((n,i) => {

        if (i > 1 && i != parseInt(arr_i.length/2)) return <img key={i} className='prj-d-img' src={`/proj/${indp[loc]}/${indp[loc]}-${i}.jpg`} alt={`${indp[loc]}-img-${i}`} />
        
        else if (i == parseInt(arr_i.length/2)) return (
          <Fragment key='fr-1'>
            <img key={i} className='prj-d-img' src={`/proj/${indp[loc]}/${indp[loc]}-${i}.jpg`} alt={`${indp[loc]}-img-${i}`} />
            <img key='1' className='prj-d-img' src={`/proj/${indp[loc]}/${indp[loc]}-1.jpg`} alt={`${indp[loc]}-img-1`} /> 
          </Fragment>
        )
 
      })}
    </div>
    </>
  )
} else {
  console.log('FAIL')
  let navigate = useNavigate()
  useEffect(() => {
    let path = ind[lng].nav[3].toLowerCase()
    navigate (`${ind[lng].nav[0]}/${path}`)
  })
  return <Projects ind={ind} lng={lng} />
}

}})