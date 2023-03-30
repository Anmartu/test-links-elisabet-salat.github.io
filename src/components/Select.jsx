import { useEffect } from "react"

export const Select = ({leng, change}) => {
  let arr = ['ca','es','en']
  let arr2 = arr
  arr2.splice(arr.indexOf(leng),1)
  const [l1, l2] = arr2

  let vis = false;
  useEffect(()=> {
    let lis = document.querySelectorAll('#hidden > ul > li')
    let select = document.querySelector('.select')
  select.addEventListener('click', e => {
    if (!vis) {
      document.querySelector('.select > svg').style.transform='rotate(180deg)'
      hidden.style.visibility='visible'
      for (let i=0 ; i < lis.length ; i++) {
        lis[i].style.opacity="100%"
        lis[i].style.transform="translate(-5px)"
      }
      vis = true;
      e.stopPropagation()
    }
  })
    
    window.addEventListener('click', () => {
    if (vis) {
      hidden.style.visibility='hidden'
      for (let i=0 ; i < lis.length ; i++) {
        lis[i].style.opacity="0%"
        lis[i].style.transform="translate(10px)"
      }
      vis = false;
      document.querySelector('.select > svg').style.transform='rotate(0deg)'
    }
    })
  })
    return (
      <ul >
        <li><button onClick={change} name={l1} type="button">{l1.toUpperCase()}</button></li>
        <li><button onClick={change} name={l2} type="button" >{l2.toUpperCase()}</button></li>
      </ul>
    )
}
