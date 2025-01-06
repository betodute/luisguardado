import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-phone'>
      <i id='contact-icon' class="fa-solid fa-phone"></i>
        646-212-3516
      </div>
      <div className='contact-email'>
        contacto@luisguardado.com
      </div>
    </div>
  )
}