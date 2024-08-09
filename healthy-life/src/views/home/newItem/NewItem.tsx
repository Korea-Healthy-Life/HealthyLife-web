import React from 'react'
import MainSlider from './NewItemSlider';
import product01 from '../../../assets/images/product01.jpg';
import product02 from '../../../assets/images/product02.jpg';
import product03 from '../../../assets/images/product03.jpg';
import product04 from '../../../assets/images/product04.jpg';
import product05 from '../../../assets/images/product05.jpg';
import product06 from '../../../assets/images/product06.jpg';
import product07 from '../../../assets/images/product07.jpg';
import product08 from '../../../assets/images/product08.jpg';
import '../../../style/home/main1.css';

export default function NewItem() {
  const images = [
    product01,
    product05,
    product08,
    product02,
    product06,
    product03,
    product07,
    product04,
  ];
  return (
    <div className='sliderContainer'>
      <div className='h3Container'>
      <h3>새로운 상품</h3>
      </div>
      <MainSlider images={images}/>
    </div>
  )
}

