import React from 'react'
import './Map.css'

export const Map = () => {
  return (
    <div className='map-wrapper'>
      <div className='map-title'>
        Calle Westman 252
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54231.85317923062!2d-116.64485513876612!3d31.838856539603885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88e2311cf3b45%3A0x1464f6d0db46d0e0!2sC.%20Westman%20252%2C%20Carlos%20Pacheco%2C%2022785%20Ensenada%2C%20B.C.!5e0!3m2!1sen!2smx!4v1735773413536!5m2!1sen!2smx" width="350" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}