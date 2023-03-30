import content from '../assets/content.json'

let arr = ['cat', 'esp', 'eng']
export const [ProjectD, ProjectD_es, ProjectD_en] = arr.map(() => {
  return ({ind,lng, indp}) => {
    console.log(ind, indp)
    let loc = indp.indexOf(location.pathname.split('/').pop())
    console.log(loc)
    return (
    <>
    <h1>Hola que tal {ind[lng].nav[3]} Detall {ind['ca'].prj[loc]}</h1>
    </>
  )}
})