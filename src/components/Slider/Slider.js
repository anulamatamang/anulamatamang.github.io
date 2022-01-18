import React, { useState } from 'react';
import dataSlider from './dataSlider';
import styles from './Slider.module.css';
import BtnSlider from './BtnSlider';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className={styles.container_slider}>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index ? styles.active_anim : styles.slide}
            style={{ height: '100%', width: '100%' }}
          >
            {/* <img src={obj.image} sytle={{ objectFit: 'cover' }} /> */}
            <img
              src={`images/kidconnect/kidconnect${index + 1}.png`}
              sytle={{ objectFit: 'cover' }}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
}
