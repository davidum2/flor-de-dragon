import React from 'react'
import './Paquete.css'


const Paquete = ({ tipo, imageSource, descripcion, precio, duracion }) => {


  return (
    <div className='screenSplit-container'>
      <div className="titulo-paquete">
        <h1>{tipo}</h1>
      </div>

      <div className="container-tag-paquete">
        <div className="scrensplit-image">
          <img src={imageSource} />
        </div>


        <div className="descripcion-paquete">
          <h2>{descripcion}</h2>

          <p>{duracion}</p>

          <h3>{precio}</h3>
        </div>
      </div>


    </div>
  )
}

export default Paquete;