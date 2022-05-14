import React from 'react'
import Piedras from "../assets/images/corporal.png"


const TarjetaTerapias = (props) => {


    return (
    <div>
        <h1>{props.tipo}</h1>
        <img src={Piedras} height="100"/>
        <p>{props.descripcion}</p>
        <h2>{props.precio}</h2>
        <h2>{props.duracion}</h2>
    </div>
  )
}

export default TarjetaTerapias;