import React from 'react'

import MainBanner from './MainBanner';
import banner01 from '../../../assets/images/banner01.jpg'
import banner02 from '../../../assets/images/banner02.jpg'

export default function MainApp() {
  const images = [
    banner01,
    banner02,
  ];
  return (
    <div className='images'>
      <MainBanner images={images} />
    </div>
  );
}