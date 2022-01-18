import React from 'react';
import styles from './Slider.module.css';
// import LeftArrow from './icons/left-arrow.svg';
// import RightArrow from './icons/right-arrow.svg';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      className={
        styles.btn_slide +
        ' ' +
        (direction === 'next' ? styles.next : styles.prev)
      }
      onClick={moveSlide}
    >
      {/* <img src='/icons/right-arrow.svg' alt='' /> */}
      <img
        src={
          direction === 'next'
            ? `/icons/right-arrow.svg`
            : `/icons/left-arrow.svg`
        }
        alt=''
      />
    </button>
  );
}
