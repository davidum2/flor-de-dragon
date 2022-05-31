import React from 'react'
import './Terapia.css'


const Terapia = ({ tipo, imageSource, descripcion, precio, duracion }) => {


  return (
    <div className='target'>
      <div className="divTitle">
        <h1>{tipo}</h1>
      </div>
      <div className="divImage">
        <img src={imageSource} height="150" />
      </div>
     
        <p>{descripcion}</p>
    
      <div className="divPrice">
        <h2>{precio}</h2>
      </div>
      <div className="divDuracion">
        <h2>{duracion}</h2>
      </div>
    </div>
  )
}

export default Terapia;