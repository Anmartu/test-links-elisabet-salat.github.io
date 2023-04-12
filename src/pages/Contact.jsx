import {Facebook, Insta } from '../components/Icons'
import '../stylesheets/contact.css'
import '../stylesheets/index.css'

let arr = ['ca', 'es', 'en']
export const [Contact, Contact_es, Contact_en] = arr.map(() => {
  return ({ind,lng}) => {return (
    <>
    <div className='contact-container'>
      <h1 className='contact-title'>{ind[lng].contact}</h1>
      <a className='contact-mail' href="mailto:elisabetsalat@yahoo.es">elisabetsalat@yahoo.es</a>
    </div>
    </>
  )}
})
