import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import landingvideo from '../assets/landingvideo.mp4'
import wrappingborder from '../assets/wrappingborder.png'
import clickstart from '../assets/clickstart.png'
import comingsoon from '../assets/comingsoon.png'
import startaux from '../assets/lie.mp3'

function Home(){

  const [flip, setFlip] = useState(false)
  const props = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    delay: 500,
    onRest: () => setFlip(!flip)
  })

  const navigate = useNavigate()

  function handleClick () {
    navigate("/navbar")
  }

  function playAudio () {
    new Audio(startaux).play()
  }

  function both () {
    playAudio()
    handleClick()
  }
  
  return (
    <div className='main'>
        <video className='video' src={landingvideo} autoPlay loop muted />
        <img className='wrapping-border' src={wrappingborder}/>
        <animated.div style={props}>
          <img className='comingsoon' src={comingsoon}/>
            <button className="click-start" onClick={both}>
              <img src={clickstart}/>
            </button>
        </animated.div>
        
    </div>
  )
}


export default Home