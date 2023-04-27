import '../stylesheets/home.css'
import { useEffect } from 'react'

let arr = ['ca', 'es', 'en']
export const [Home, Home_es, Home_en] = arr.map( () => {
  return ({ind, lng}) => {

    useEffect(()=>{
      let img = document.querySelectorAll('.home-img')
      let img_c = document.querySelector('.home-img-container')
      let intro = document.querySelector('.home-intro')
      let c = 0;

      setInterval(() => {
        if (c < 4) {
          img[c+1].classList.remove('hidden-home')
          img[c].classList.add('hidden-home')
          c++
        } else {
          c = 0
          img[c].classList.remove('hidden-home')
          img[4].classList.add('hidden-home')
        }
      }, 9000)

      intro.classList.remove('side-l')
      img_c.classList.remove('side')

    }, [])
    
    
    return (
    <>
    <div className="home">
      <p className='home-intro side-l'>{ind[lng].home}</p>
      <div className='home-img-container side'>
        <img className='home-img' src="/col/2014-2015/Nòmades.jpg"></img>
        <img className='home-img hidden-home' src="/col/2008/40.jpg"></img>
        <img className='home-img hidden-home' src="/col/2009-e/Estructures I.jpg"></img>
        <img className='home-img hidden-home' src="/proj/the-booc/the-booc-9.jpg"></img>
        <img className='home-img hidden-home' src="/proj/calidoscopi/calidoscopi-1.jpg"></img>
      </div>
    </div>
    </>
  )}
})

export const [NoPage, NoPage_es, NoPage_en] = arr.map( () => {
  return () => {return (
    <>
    <h1> 404 </h1>
    </>
  )}
})
