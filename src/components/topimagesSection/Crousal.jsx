import React from 'react'
import "./Crousal.css"
import { useEffect } from 'react';
const Crousal = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.wimages > div');
    let currentIndex = 0;

    const changeImage = () => {
      images.forEach((image, index) => {
        if (index === currentIndex) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });

      currentIndex = (currentIndex + 1) % images.length;
    };

    const interval = setInterval(changeImage, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div class="work" id="work">
      
      <div class="wimages">
        <img class="wimage1"></img>
        <div class="wimage2"></div>
        <div class="wimage3"></div>
        {/* <div class="wimage4"></div> */}
        {/* <div class="wimage5"></div> */}
      </div>
    </div>
  )
}

export default Crousal