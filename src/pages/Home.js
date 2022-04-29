import React from 'react'
import Vid from '../assets/images/Video.mp4'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='container'>
      <div className='video'>
          <video className='video-background' autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
          </video>
          <div className='video-overlay'></div>
      </div>

    </div>
</>
  )
}

export default Home