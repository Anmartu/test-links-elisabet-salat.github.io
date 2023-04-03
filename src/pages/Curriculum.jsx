import '../stylesheets/curriculum.css'

let arr = ['ca', 'es', 'en']
export const [Curriculum, Curriculum_es, Curriculum_en] = arr.map(() => {
  return ({ind, lng}) => {

    return (
    <>
    <div className='cur-container'>
      <div className='curr-data-container'>
        {ind[lng].curriculum.map((n,i) => <p className='cur-data' key={i}>{n}</p>)}
      </div>
      <img className='cur-img' src="/curr/curr-1.jpg" alt="curriculum-img" />
    </div>
    </>
  )}
})

