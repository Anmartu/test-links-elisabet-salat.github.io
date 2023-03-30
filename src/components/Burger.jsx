import { useEffect } from "react"

export const Burger = () => {
  useEffect(()=>{
  let burger =  document.querySelector('.burger')
  let bar =  document.querySelectorAll('.burger > div')
  let nav =  document.querySelector('.nav')
  let section =  document.querySelectorAll('.naveg > li')
  let select =  document.querySelector('.select')
  let logo =  document.querySelector('#logo > a > svg')
  let naveg =  document.querySelector('.naveg')
  let body =  document.querySelector('body')

  let element = [...bar, nav, ...section, select, logo, naveg, body]

  burger.addEventListener('click', () => {
    element.forEach( n => n.classList.toggle('active'))
  })

  let logolink =  document.querySelector('#logo > a')
  let links = document.querySelectorAll('.naveg > li > a')
  links = [...links, logolink]

  links.forEach(n => n.addEventListener("click", () => {
    element.forEach( n => n.classList.remove('active'))
  }))
  },[])

  return (
    <>
    <div className='burger'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </>
  )
}