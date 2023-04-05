import '../stylesheets/home.css'

let arr = ['ca', 'es', 'en']
export const [Home, Home_es, Home_en] = arr.map( () => {
  return ({ind, lng}) => {return (
    <>
    {/* <h1>Hola que tal {ind[lng].nav[1]}</h1> */}
    <div className="home">
      <p className='home-intro'>{ind[lng].home}</p>
      <img className='home-img' src="/col/2007/Connexions.jpg"></img>
    </div>

      <div id='bg-poligon-1'> <div></div> </div>
      <div id='bg-poligon-2'> <div></div> </div>

    
    </>
  )}
})

export const [NoPage, NoPage_es, NoPage_en] = arr.map( () => {
  return ({ind, lng}) => {return (
    <>
    <h1> 404 {ind[lng].nav[1]}</h1>
    </>
  )}
})
