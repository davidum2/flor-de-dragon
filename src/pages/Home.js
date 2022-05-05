import React from 'react'
import Vid from '../assets/images/Video.mp4'
import TarjetasComentarios from '../components/TarjetasComentarios'

import './Home.css'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='seccion'>
          <video className='video-background' autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
          </video>
          <div className='video-overlay'></div>

          <div className='welcome-tex'>
            <div className='div-container'>
              <div className='text-left'>
                <h1>
                  Flor de Dragón
                </h1>
                <h2>
                  Terapias corporales
                </h2>
                <br />
                <h3>
                  Más de 10 años trabajando con el corazón y cuidando a nuestros clientes
                </h3>
                <br />
                <p>
                  En Flor de Dragón estamos comprometidos con la salud y felicidad de nuestros clientes, por eso ofrecemos terapias corporales que ayudan a sanar el cuerpo y el alma
                </p>
                <p>
                  Contamos con mas de una decada de servicio y cuidado de las personas que nos prefieren, aplicando diferentes terapias y una atencion personalizada</p>
                <div className='btn-tex'>
                  <button className='btn'>Terapias</button>
                </div>
              </div>
              <div className='text-right'>
                <TarjetasComentarios/>
              </div>
            </div>
          </div>
        </div>
        <div className='seccion'>
          <section className='texto-home'>
            lorem
          </section>
        </div>
      </div>
    </>
  )
}

export default Home