import React from 'react'
import landingvideo from '../assets/landingvideo.mp4'
import wrappingborder from '../assets/wrappingborder.png'
import paint from '../assets/paintuntitled.png'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useNavigate } from 'react-router-dom'

import art from "../assets/200w.gif"
import aboutme from "../assets/aboutme.gif"
import react from "../assets/code.gif"
import world from "../assets/home.gif"
import video from "../assets/video.gif"
import contact from "../assets/contact.gif"

import aboutmetext from "../assets/abouttext.png"
import arttext from "../assets/arttext.png"
import videostext from "../assets/videostext.png"
import csportfolio from "../assets/csportfolio.png"
import contacttext from "../assets/contacttext.png"

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
    navigate("/")
  }

  function toAboutMe () {
    navigate("/aboutme")
  }

  function toArt () {
    navigate("/art")
  }

  function toCS (){
    navigate("/cs")
  }

  function toVideo () {
    navigate("/video")
  }

  function toContact () {
    navigate("/contact")
  }

  return (
    <div className='main'>
    <video className='video' src={landingvideo} autoPlay loop muted />
    <img className='wrapping-border' src={wrappingborder}/>
    <animated.div style={props}>
      <img className='untitled' src={paint}/>

      <button onClick={toAboutMe}>
        <img className='aboutme' src={aboutme}/>
          <img className='aboutmetext' src={aboutmetext}/>
      </button>

      <button onClick={toArt}>
        <img className='art' src={art}/>
          <img className='arttext' src={arttext}/>
      </button>

      <button onClick={toCS}>
        <img className='react' src={react}/>
          <img className='csportfolio' src={csportfolio}/>
      </button>
      
      <button onClick={toVideo}>
        <img className='veffect' src={video}/>
          <img className='videostext' src={videostext}/>
      </button>

      <button onClick={toContact}>
        <img className='contact' src={contact}/>
          <img className='contacttext' src={contacttext}/>
      </button>

      <button onClick={back}>
        <img className='home' src={world}/>
      </button>
    </animated.div>
</div>
  )
}

export default Nav