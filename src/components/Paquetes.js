import React, { useState } from 'react'
import { paquete } from '../repositori/paquetes'

import TarjetaPaquete from './Paquete'
import './Paquete.css'

const Paquete = () => {

  const [paqueteAray, setPaqueteAray] = useState(paquete);

 
  console.log('esta es ' + paqueteAray.length)
  return (
    <>
   
      <div className="display-section">
        <div className='container-secction'>

          <h1 className="titleSection">Nuestros Paquetes</h1>

          

          <div className="containert-tags">
            {paqueteAray.map(paquete => {
              return (
                <TarjetaPaquete
                  key={paquete.id}
                  tipo={paquete.tipo}
                  imageSource={paquete.imageTerapia}
                  descripcion={paquete.descripcion}
                  precio={paquete.precio}
                  duracion={paquete.duracion} />)
            })}
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Paquete