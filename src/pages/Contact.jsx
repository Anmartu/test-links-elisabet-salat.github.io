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
      {/* <div className='xarxes contact'>
        <ul>
            <li>
              <a className='social' href="https://www.instagram.com/andreu.martorell/"><Facebook/> </a>
            </li>
            <li> 
              <a className='social' href="https://www.facebook.com/Andreu-Martorell-101890385143452"><Insta/>  </a>
            </li>
          </ul>
      </div> */}
    </div>
    </>
  )}
})
