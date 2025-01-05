import React from 'react';
import './Header.css';
import profilepic from './luis-profile-pic.jpg';

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-title'>
        luis guardado: psicólogo
      </div>
      <div className='profile-pic-wrapper'>
        <img src={profilepic} className='profile-pic' />
      </div>
      <div className='header-subtitle'>
        Lic. UABC Cédula Profesional: 14534797
      </div>
      <div className='header-content'>
        <div className='first-line'> 
        Atención Psicológica con Enfoque Humanista
        </div>
        <div className='block-description'>
        Ofrezco un espacio seguro y empático donde, a través de la corriente humanista, acompaño a cada persona en su camino hacia el autoconocimiento, el crecimiento personal y la autorrealización. Mi enfoque se basa en la empatía, la aceptación incondicional y la confianza, reconociendo las fortalezas y el potencial único de cada individuo.
        Juntxs trabajaremos para superar retos emocionales, encontrar sentido y lograr una vida más plena y significativa.
        </div>
      </div>
    </div>
  )
}

