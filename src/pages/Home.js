import React from 'react'
import Vid from '../assets/images/Video.mp4'
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
            <div className='text-container'>
            <h1>
              Flor de Dragon
            </h1>
            <h2>
              Terapias corporales
            </h2>
            <h3>
              Más de 10 años cudando con el corazón a nuestros clientes
            </h3>
            <br/>
            <p>
              En Flor de Dragón estamos comprometidos con la salud y felicidad de nuestros clientes, por eso ofrecemos terapias corporales que ayudan a sanar el cuerpo y el alma
            </p>
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