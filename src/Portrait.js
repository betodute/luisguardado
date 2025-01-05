import React from 'react'
import './Portrait.css'
import portraitpic from './luis-portrait-pic.jpg';

export const Portrait = () => {
  return (
    <div className='portrait-wrapper'>
      <img src={portraitpic} className='portrait-pic' />
      <div className='portrait-subtitle'>
        Lic. UABC Cédula Profesional: 14534797
      </div>
    </div>
  )
}