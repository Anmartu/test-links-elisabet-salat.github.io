import { useEffect } from "react"
import '../stylesheets/collections_d.css'

export const PicsCol = ({ele, setele}) => {

  // const resize = () => {
  //   if (innerWidth > 640) {
  //     console.log('big')
  //     setele(6)
  //   } else {
  //     console.log('lil')
  //     setele(2)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('resize', resize)
  //   if (document.readyState !== "loading") resize()
  //   else window.addEventListener('DOMContentLoaded', resize)
  // },[setele])


  useEffect(()=>{

    let circleList = document.querySelector('.circles')
    let next = document.querySelector('.arrow-col.next-col')
    let prev = document.querySelector('.arrow-col.prev-col')
    let arrows = document.querySelector('.arrow-container')
    let img = document.querySelectorAll('.img-col')
    let c = 0;
    let cb = 0;
    let limit;

    if ((img.length / ele + '').split('.')[1]) limit = parseInt(img.length/ele)
    else limit = parseInt(img.length/ele) - 1
  
    for (let i = 0; i < limit + 1; i++) {
      circleList.innerHTML+='<div></div>'
    }
  
    let circles = document.querySelectorAll('.circles > div')
  
    circles[cb].style.backgroundColor='black'
  
    if(!limit == 0) {
      next.addEventListener('click', () => {
        if(c < ele*limit) {
          let arr = []
          img.forEach(n => { 
            if (n.className.includes('hidden-img')) {
              arr.push(n)
              arr.forEach((n, i) => {
                if ( i < ele + c && ( i == c || i > c) ) {
                  n.classList.remove('hidden-img')
                }
              } )
            } else {
              n.classList.add('hidden-img')
              n.classList.add('trans-left')
            }
          })
          c = c + ele;
          cb++;
        }
        if (c == ele*limit) {
          next.classList.add('arrow-hidden')
        } else if (c <= ele)  {
          prev.classList.remove('arrow-hidden')
        } if( limit == 1) {
          prev.classList.remove('arrow-hidden')
        }
        circles.forEach((n, i) => {
          if (i == cb) {
            n.style.backgroundColor='black'
          } else {
            n.style.backgroundColor='transparent'
          }
        })
      })
      prev.addEventListener('click', () => {
        if(c > 0) {
          let arr = []
          img.forEach(n => { 
            if (n.className.includes('hidden-img')) {
              arr.push(n)
              arr.forEach((n, i) => {
                if ( i < ele + (c - ele) && ( i == (c - ele) || i > (c - ele))) {
                  n.classList.remove('hidden-img')
                }
              } )
            } else {
              n.classList.add('hidden-img')
              n.classList.remove('trans-left')
            }
          })
          c = c - ele;
          cb--
        }
        if (c == 0) {
          prev.classList.add('arrow-hidden')
        } else if (c < ele*limit)  {
          next.classList.remove('arrow-hidden')
        } if( limit == 1) {
          next.classList.remove('arrow-hidden')
        }
        circles.forEach((n, i) => {
          if (i == cb) {
            n.style.backgroundColor='black'
          } else {
            n.style.backgroundColor='transparent'
          }
        })
      })
    } else {
      arrows.style.display='none'
      circleList.style.display='none'
    }
  },[])

  return (
    <div className='circles'></div>
  )

}

