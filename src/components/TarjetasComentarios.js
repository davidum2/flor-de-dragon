import React, { useEffect, useState } from 'react'
import { comentarios } from "./../repositori/comentarios"
import {FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './TarjetaComentarios.css'



const TarjetasComentarios = () => {

  const [comentario, setComentario] = useState(comentarios)
  const [i, setI] = useState(0)
  const [textoEnVista, setTextoEnVista] = useState(comentario[i])
  const [tamañoFuente, setTamañoFuente] = useState('texto-grande')


  const sumar = () => {
    setI(i + 1)
    if (i == comentario.length - 1) { setI(0) }
    setTextoEnVista(comentario[i])
    proporcionDeTexto()
  }

  const restar = () => {
    setI(i - 1)
    if (i === 0) { setI(comentario.length - 1) }
    console.log(i)
    setTextoEnVista(comentario[i])
    proporcionDeTexto()
  }

  const proporcionDeTexto = () => {
    const tamañoString = textoEnVista.texto.length
    tamañoString <= 100 ? setTamañoFuente('texto-pequeño') : setTamañoFuente('texto-grande')
  }

  //setInterval(sumar,5000)

  return (
    <>
    <FaAngleLeft className="arrow" onClick={restar}/>
      <div className="tarjeta">
      
        <h5 className={tamañoFuente}>"...{textoEnVista.texto} ..."<br/>
        <br/><i>{textoEnVista.autor}</i>
        </h5>
      
    
    </div>
    <FaAngleRight className="arrow" onClick={sumar}/>
    </>
  )


}

export default TarjetasComentarios