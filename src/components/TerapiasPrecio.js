import React, { useState } from 'react'
import { terapias } from '../repositori/terapias'

const TerapiasPrecio = () => {

const [terapiasAray, setTerapiasAray] = useState([terapias]);

const tarjetaCompleta = () => {for (let index = 0; index < terapiasAray.length; index++) {
  const element = terapiasAray[index];
return(
  <div className="tag {index}">
    <h1>{element.tipo}</h1>
    <p>{element.descripcion}</p>
    <h2>{element.precio}</h2>
    <h2>{element.duracion}</h2>
  </div>
  
)}}


  return (
    <>
      <div className='container'>
        <div className="containert-tags">
          {tarjetaCompleta}        
        </div>
      </div>

    
    </>
  )
}

export default TerapiasPrecio