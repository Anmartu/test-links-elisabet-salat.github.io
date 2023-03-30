
let arr = ['ca', 'es', 'en']
export const [Curriculum, Curriculum_es, Curriculum_en] = arr.map(() => {
  return ({ind, lng}) => {
    return (
    <>
    <h1>Hola que tal {ind[lng].nav[5]}</h1>
    </>
  )}
})

