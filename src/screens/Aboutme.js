import React from 'react'
import landingvideo from '../assets/landingvideo.mp4'
import wrappingborder from '../assets/wrappingborder.png'
import paint from '../assets/paintuntitled.png'
import world from "../assets/home.gif"
import { useNavigate } from 'react-router-dom'

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
      
      <button onClick={back}>
        <img className='home' src={world}/>
      </button>
    </animated.div>
</div>
  )
}

export default Nav