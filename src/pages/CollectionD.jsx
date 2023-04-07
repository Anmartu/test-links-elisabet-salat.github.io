import '../stylesheets/collections_d.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Arrow } from '../components/Icons'
import { PicsCol } from '../components/PicsCol'
import { NoPage } from './Home'
import { Collections } from './Collections'

let arr = ['ca', 'es', 'en']
export const [CollectionD, CollectionD_es, CollectionD_en] = arr.map(() => {

  return ({ ind, lng, indc}) => {
  
  let params = useParams()
  let ind_param = indc[arr.indexOf(lng)]

  if (ind_param.indexOf(params.nom) != -1) {

    let loc = indc.map(item => item.indexOf(location.pathname.split('/').pop()))
    loc = loc.filter(item => item !== -1)
    if (loc.length > 1) {
      loc.pop() 
    } if (loc.length > 1) {
      loc.pop()
    }

    let col_d = ind.ca.col_t[loc][1].map(item => item.replace('%20',' ').replace('%C3%A8','è').replace('%C3%AD', 'í') )
    let col_m = ind.ca.col_m[loc][1]
    let tech = ind[lng].tech[loc]

    const [ele, setele] = useState(6)

    useEffect(()=>{
      let img = document.querySelectorAll('.img-col > img')
      let divImg = document.querySelectorAll('.img-col')
      let pic = document.querySelector('.col-pic')
      let container = document.querySelector('.col-pic-d')
      let nextPic = document.querySelector('.arrow-col-pic.next-col')
      let prevPic = document.querySelector('.arrow-col-pic.prev-col')
      let out = document.querySelector('.out-pic')
      let footer = document.querySelector('footer')
      let headerCol = document.querySelector('.header-col')
      let colTitle = document.querySelector('.title-col-d')
      let data = document.querySelector('.data')
      let num = document.querySelector('.container-title-col > span')
      let galery = document.querySelector('.galery-container')
      let contTitle = document.querySelector('.container-title-col')

      let c = 0;
      
      img.forEach(n => {
        n.addEventListener('click', e => {
          pic.src=n.src
          c = e.target.getAttribute("v")

          colTitle.innerHTML=`${col_d[c]}`
          data.innerHTML = `<p>${col_m[c]}</p>`
          tech[c].forEach(n =>data.innerHTML += `<p>${n}</p>`)
          num.innerHTML=`${parseInt(e.target.getAttribute("v"))+1} / ${col_d.length}`
          
          if(c > 0) {
            prevPic.classList.remove('arrow-hidden')
          } else {
            prevPic.classList.add('arrow-hidden')
          } if (c == img.length-1) {
            nextPic.classList.add('arrow-hidden')
          } else {
            nextPic.classList.remove('arrow-hidden')
          }

          divImg.forEach((n,i) => {
            if (i == c) n.classList.add('border')
            else n.classList.remove('border')
          })

        })
      })

      nextPic.addEventListener('click', e => {
        if(c != img.length-1) {
          c++
          pic.src=img[c].src
          colTitle.innerHTML=`${col_d[c]}`
          data.innerHTML = `<p>${col_m[c]}</p>`
          tech[c].forEach(n =>data.innerHTML += `<p>${n}</p>`)
          num.innerHTML=`${c+1} / ${col_d.length}`
          if (c != 0 && c!= img.length-1) {
            prevPic.classList.remove('arrow-hidden')
          } else {
            nextPic.classList.add('arrow-hidden')
          }
          
          divImg.forEach((n,i) => {
            if (i == c) n.classList.add('border')
            else n.classList.remove('border')
          })
        }
      })

      prevPic.addEventListener('click', () => {
        if (c != 0) {
          c--
        pic.src=img[c].src
        colTitle.innerHTML=`${col_d[c]}`
        data.innerHTML = `<p>${col_m[c]}</p>`
        tech[c].forEach(n =>data.innerHTML += `<p>${n}</p>`)
        num.innerHTML=`${c+1} / ${col_d.length}`
        if (c == 0) {
          prevPic.classList.add('arrow-hidden')
        } else if(c < img.length-1){
          nextPic.classList.remove('arrow-hidden')
        }
        divImg.forEach((n,i) => {
        if (i == c) n.classList.add('border')
        else n.classList.remove('border')
        })
        }
      })

      pic.addEventListener('click', () => {
        container.classList.toggle('present')
        nextPic.classList.toggle('present')
        prevPic.classList.toggle('present')
        footer.classList.toggle('hidden')
        headerCol.classList.toggle('hidden')
        galery.classList.toggle('hidden')
        data.classList.toggle('hidden')
        contTitle.classList.toggle('hidden')
      })

      out.addEventListener('click', () => {
        container.classList.remove('present')
        nextPic.classList.remove('present')
        prevPic.classList.remove('present')
        footer.classList.remove('hidden')
        headerCol.classList.remove('hidden')
        galery.classList.remove('hidden')
        data.classList.remove('hidden')
        contTitle.classList.remove('hidden')
      })

    },[])


    console.log('Correcte',ind_param.indexOf(params.nom) )
    return (
      <>
      
      <div className='header-col'>
        <h1 className='title-col'>{ind[lng].col[loc]}</h1>
      </div>
    
      <div className='col-d'>
      <div className='container-title-col'>
              <h2 className='title-col-d'>{col_d[0]}</h2>
              <span>1 / {col_d.length}</span>
            </div>
    
        <div className='col-pic-d'>
          <div className='arrow-col-pic prev-col arrow-hidden'>
            <Arrow />
          </div>
    
          <div className='galeria-whole'>
          <div className='container-pic-col'>
            
            <img className='col-pic' src={`/col/${ind.ca.col_t[loc][0]}/${col_d[0]}.jpg`} alt="" />
            <div className='out-pic'><div></div><div></div></div>
            <div className='data'>
            <p>{col_m[0]}</p>
            {tech[0].map((n,i) => <p key={i}>{n}</p>)}
            </div>
          </div>
    
          <div className='galery-container'>
            <div className='galery'>
              <div className='img-col-select'>
              {col_d.map((item, i) => {      
                  return (
                    <div key={item} className={`img-col ${i==0 ? 'border' : i >= ele ? 'hidden-img' : ''}`.trimEnd()} >
                    <img v={i} width='115' height='115' src={`/col/${ind.ca.col_t[loc][0]}/${item}.jpg`} alt="" />
                    </div>
                    )
              })}
              </div>
    
              <div className='arrow-container'>
                <div className='arrow-col next-col'>
                  <Arrow />
                </div>
                <div className='arrow-col prev-col arrow-hidden'>
                  <Arrow />
                </div>
              </div>
              </div>
    
            <PicsCol ele = {ele} setele={setele}/>
          </div>
    
          </div>
    
          <div className='arrow-col-pic next-col'>
            <Arrow />
          </div>
        </div>
      </div>
    
      </>
    )
    
  }
  else {
    let navigate = useNavigate()
    useEffect(() => {
      let path = ind[lng].nav[2].toLowerCase()
      if (ind_param.indexOf(params.nom) == -1) {
        navigate (`${ind[lng].nav[0]}/${path}`)
      }
    })
    return <Collections ind={ind} lng={lng} indc={indc} />
  }

}})
