
let arr = ['ca', 'es', 'en']
export const [Contact, Contact_es, Contact_en] = arr.map(() => {
  return ({ind,lng}) => {return (
    <>
    <h1>Hola que tal {ind[lng].nav[6]}</h1>
    </>
  )}
})
