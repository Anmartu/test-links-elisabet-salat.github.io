import { Link } from 'react-router-dom'
import '../stylesheets/process.css'

let arr = ['cat', 'esp', 'eng']

export const [Process, Process_es, Process_en] = arr.map(() => {

  return ({ind,lng}) => {

    return (
    <>

      <div className='proc-par'>
        <img width='331' height='331' className='proc-img' src="/proc/proc-1.jpg" alt="Formats" />
        <div className='proc-p'>
          <p className='proc-text'>{ind[lng].process[0]}</p>
          <p className='proc-text'>{ind[lng].process[1]}</p>
        </div>
      </div>
      <div className='proc-par'>
        <div className='proc-p'>
          <p className='proc-text'>{ind[lng].process[2]}</p>
          <p className='proc-text'>{ind[lng].process[3]}</p>
        </div>
        <img width='331' height='331' className='proc-img-r' src="/proc/proc-2.jpg" alt="Tècnica" />
      </div>
      <div className='proc-par'>
        <img width='331' height='331' className='proc-img' src="/proc/proc-4.jpg" alt="Temes" />
        <div className='proc-p'>
          <p className='proc-text'>{ind[lng].process[4]}</p>
        </div>
      </div>
    </>
  )}
})

