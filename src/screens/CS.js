import React, { useState, useRef, useEffect } from 'react';
import world from "../assets/home.gif"
import { useNavigate } from 'react-router-dom'
import desktop from '../assets/desktop.jpeg'
import folder from '../assets/folder.png'
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

  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState('Loading location...');

  const folderRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: window.innerWidth - 200,
    lastY: 0
  });

  useEffect(() => {
    const folder = folderRef.current;
    folder.style.top = '10px'; 
    folder.style.left = `${window.innerWidth - folder.offsetWidth - 10}px`;
  }, []);

  useEffect(() => {
    const folder = folderRef.current;

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = folder.style.left ? parseInt(folder.style.left, 10) : 0;
      coords.current.lastY = folder.style.top ? parseInt(folder.style.top, 10) : 0;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      folder.style.top = `${nextY}px`;
      folder.style.left = `${nextX}px`;
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    const cleanup = () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };

    return cleanup;
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    const timer = setInterval(updateTime, 1000);

    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
          },
          (error) => {
            console.error('Error fetching location:', error);
            setLocation('Location unavailable');
          }
        );
      } else {
        setLocation('Geolocation not supported');
      }
    };

    fetchLocation();

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='main'>
      <animated.div style={props}>
        <img className='desktop' src={desktop}/>
        <img ref={folderRef} className='folder' draggable='false' src={folder}/>
        <button onClick={back}>
          <img className='home' src={world}/>
        </button>
        <div id="weather">
          <div>Time: {currentTime.toLocaleTimeString()}</div>
          <div>Location: {location}</div>
        </div>
      </animated.div>
    </div>
  )
}

export default Nav