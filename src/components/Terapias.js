import React, { useState } from 'react'
import { terapias } from '../repositori/terapias'

import TarjetaTerapias from './Terapia'
import './Terapias.css'

const Terapias = () => {

  const [terapiasAray, setTerapiasAray] = useState(terapias);

 
  console.log('esta es ' + terapiasAray.length)
  return (
    <>
   
      <div className="display-section">
        <div className='container-secction'>

          <h1 className="titleSection">Nuestras Terapias</h1>

          

          <div className="containert-tags">
            {terapiasAray.map(terapia => {
              return (
                <TarjetaTerapias
                  key={terapia.id}
                  tipo={terapia.tipo}
                  imageSource={terapia.imageTerapia}
                  descripcion={terapia.descripcion}
                  precio={terapia.precio}
                  duracion={terapia.duracion} />)
            })}
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Terapias