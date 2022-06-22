import React from 'react'
import Logo from "../assets/images/Logo.png"
import "./about.css"
import Corporal from "../assets/images/corporal-about.jpg"
import Founder from "../assets/images/marlen infantil.PNG"

const About = () => {
  return (
    <div className="about-container">
      <div className="title">
         <img src={Logo} className="logo-about"/>
         <h1 className="mensaje-title">
          Con más de 10 años de experiencia en el cuidado de nuestros clientes
         </h1>

      </div>
      <div className="descripcion-mesagge">
        <h2 className="text-descpripcion">
          En Flor de Dragón estamos comprometidos con nuestros clientes,
          por eso desde hace mas de una decada nos dedicamos a perfeccionar la atención
          y el servicio en cada una de nuestras terapias.
        </h2>
      </div>

      <div className="descripcion-biografia">
        
        <div className="text-biografia">
          <p >
         Nuestra Terapista y Fundadora Marlen Ochoa, tiene una amplia experienia en escuchar el cuerpo
         su formacion comenzo a temprana edad y cuenta con estudios en centro de ... en San Francisco CA,
        </p>
        </div>
        <div ><img src={Founder} /></div>
      </div>

      <div className="descripcion-teripa-corporal">
        <img src={Corporal}/>
        <p className="corporal-texto"> Con Tecnica Sueca, desarrollada por el ..., esta tecnica se basa en 
        liberar la prsion de los musculos mas afectados a traves de masaje profundo</p>
      </div>
      <div className="descripcion-terapia-reflex">

      </div>
      <div className="descripcion-terapia-deportiva">

      </div>

    </div>
  )
}

export default About