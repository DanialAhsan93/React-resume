import React, { useEffect, useState } from 'react';
import perfectresume4 from '../images2/perfectresume4.png'
import perfectresume8 from '../images2/perfectresume8.png';
import './animation.css';
import { Tempdata } from '../template/Tempdata';

export default function Animation() {
  const [currentState, setCurrentState] = useState('state-1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const toggleAnimation = () => {
      setCurrentState((prevState) => (prevState === 'state-1' ? 'state-2' : 'state-1'));
    };

    const timer = setTimeout(toggleAnimation, 7000); // Toggle animation after 5 seconds

    return () => {
      clearTimeout(timer); // Clear the timer on component unmount
    };
  }, [currentState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Tempdata.length);
    }, 7000); // Change image every 5 seconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <>
      <div className="eq-col">
        {/* <div className="animation-container state-1"> */}
        <div className={`animation-container ${currentState}`}>
          <div className="box-doted-bg">&nbsp;</div>
          <div className="inner-box">
            <div className="yellow-box">&nbsp;</div>
            <div className="blue-box">&nbsp;</div>
            <div className="girl-box">
              <picture>
                <source type="image/webp" />
                <img
                  style={{ aspectRatio: '365/472'}}
                  decoding="async"
                  className="lazy lazy-ignore"
                  // src={perfectresume4}
                  src={Tempdata[currentImageIndex].imgtemp1}
                  alt="Hero Image"
                  width="365"
                  height="472"
                />
              </picture>
            </div>
            <p>
              <picture>
                <img
                  style={{ aspectRatio: '340/441' }}
                  decoding="async"
                  className="lazy lazy-ignore girl-box-resume-img"
                  // src={perfectresume8}
                  src={Tempdata[currentImageIndex].imgtemp1}
                  alt="Perfect Resume"
                  width="340"
                  height="441"
                />
              </picture>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}


