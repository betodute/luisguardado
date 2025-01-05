import React from 'react'
import './Social.css'

export const Social = () => {
  return (
    <div className='social-wrapper'>
      <div className='social-icon'>
        <a href="https://wa.me/qr/K4NH3ZNZINE2P1" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <div className='social-icon'>
        <a href="https://www.facebook.com/luiis.guardado?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook"></i>
        </a>
      </div>
      <div className='social-icon'>
        <a href="https://www.instagram.com/psic.luisalfonsoguardado/profilecard/?igsh=dGlheW8yaGx5YXR6" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  )
}

