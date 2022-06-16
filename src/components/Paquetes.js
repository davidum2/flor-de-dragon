import React, { useState } from 'react'
import { paquete } from '../repositori/paquetes'

import TarjetaPaquete from './Paquete'
import './Paquetes.css'

const Paquete = () => {

  const [paqueteAray, setPaqueteAray] = useState(paquete);

 
  console.log('esta es ' + paqueteAray.length)
  return (
    <>
   
      <div className="section-paquetes">
        <div className='container-paquetes'>

          <h1 className="title-Paquetes">Nuestros Paquetes</h1>

          

          <div className="paquetes-tags">
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