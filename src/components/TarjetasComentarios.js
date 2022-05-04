import React from 'react'
import {Conmentarios} from "./../repositori/comentarios"

import React from 'react'

const TarjetasComentarios = () => {
  
  const [comentari, setComentari] = useState([])

  useEffect(() => {
    setComentari=Conmentarios
  }, [])
    
  return (
    <div>
      <p className='tarjet-text'>
        
      </p>
    </div>
  )
}

export default TarjetasComentarios