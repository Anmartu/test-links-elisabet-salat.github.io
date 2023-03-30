import '../stylesheets/collections_d.css'

let arr = ['ca', 'es', 'en']
export const [Home, Home_es, Home_en] = arr.map( () => {
  return ({ind, lng}) => {return (
    <>
    {/* <h1>Hola que tal {ind[lng].nav[1]}</h1> */}
    <div className="home">
      <img src="/40.jpg"></img>
    </div>
    
    </>
  )}
})

export const [NoPage, NoPage_es, NoPage_en] = arr.map( () => {
  return ({ind, lng}) => {return (
    <>
    <h1>Hola que tal 404 {ind[lng].nav[1]}</h1>
    </>
  )}
})
