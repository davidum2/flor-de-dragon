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
            <h1>
              Bienvenidos a Flor de Dragon
            </h1>
            <h2>
              Más de 10 años cudando a nuestros clientes
            </h2>
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