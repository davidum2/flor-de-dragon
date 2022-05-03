import React from 'react'
import {Conmentarios} from "./../repositori/comentarios"

export const TarjetasComentarios = () => {
  
  
    const [comentario, setComentario] = useState()
    const [viewComentario, setViewComentario] = useState()

    useEffect(() => {
      setComentario = Conmentarios 
        
      }, [])
    
      const = <h2>
          {comentario.texto}
      </h2>


  
    return (
    <div>
        <div>

        </div>
        <div></div>
    </div>
  )
}
