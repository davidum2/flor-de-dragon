import React from 'react'
import './Terapia.css'


const Terapia = ({tipo, imageSource, descripcion, precio, duracion}) => {


    return (
    <div className='target'>
        <h1>{tipo}</h1>
        <img src={imageSource} height="100"/>
        <p>{descripcion}</p>
        <h2>{precio}</h2>
        <h2>{duracion}</h2>
    </div>
  )
}

export default Terapia;