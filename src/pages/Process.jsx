import { Link } from 'react-router-dom'

let arr = ['cat', 'esp', 'eng']

export const [Process, Process_es, Process_en] = arr.map(() => {

  return ({ind,lng}) => {
    return (
    <>
    <h1>{ind[lng].nav[4]}</h1>
    </>
  )}
})

