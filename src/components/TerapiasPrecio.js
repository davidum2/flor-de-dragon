import React, { useState } from 'react'
import { terapias } from '../repositori/terapias'
import TarjetaTerapias from './TarjetaTerapias'

const TerapiasPrecio = () => {

const [terapiasAray, setTerapiasAray] = useState(terapias);


console.log('esta es ' + terapiasAray.length)
  return (
    <>
      <div className='container'>
        <div className="containert-tags">
          {terapiasAray.map(terapia => {
            return (
            <TarjetaTerapias
               key={terapia.id}
               tipo={terapia.tipo}
               image={terapia.imageTerapia}
               descripcion={terapia.descripcion}
               precio={terapia.precio}
               duracion={terapia.duracion}/>)
          })}        
        </div>
      </div>
    </>
  )
}

export default TerapiasPrecio