import React from 'react'
import landingvideo from '../assets/landingvideo.mp4'
import wrappingborder from '../assets/wrappingborder.png'
import paint from '../assets/paintuntitled.png'
import world from "../assets/home.gif"
import { useNavigate } from 'react-router-dom'

import fishy from '../assets/fishy.png';
import waves from '../assets/waves.png';
import stuck from '../assets/stuck.png';

import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Nav() {

  const [flip, setFlip] = useState(false)
  const props = useSpring({
    to: {opacity: 0.8},
    from: {opacity: 0},
    delay: 300,
    onRest: () => setFlip(!flip)
  })
  
  const navigate = useNavigate()

  function back () {
    navigate("/navbar")
  }

  return (
    <div className='main'>
    <video className='video' src={landingvideo} autoPlay loop muted />
    <img className='wrapping-border' src={wrappingborder}/>
    <animated.div style={props}>
      <div className="scroll-container">
        <img className="stuck" src={stuck} alt="Stuck" />
        <img className="fishy" src={fishy} alt="Fishy" />
        <img className="waves" src={waves} alt="Waves" />
      </div>
      <button onClick={back}>
        <img className="home" src={world} alt="Home" />
      </button>
    </animated.div>
</div>
  )
}

export default Nav