import React from 'react'
import BestItem from './BestItem'
import '../../../style/home/main2.css'
const images = ['https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  'https://via.placeholder.com/800x400?text=Image+4',
  'https://via.placeholder.com/800x400?text=Image+5',
  'https://via.placeholder.com/800x400?text=Image+6',
  'https://via.placeholder.com/800x400?text=Image+7',
  'https://via.placeholder.com/800x400?text=Image+8',
  'https://via.placeholder.com/800x400?text=Image+9',
  'https://via.placeholder.com/800x400?text=Image+10']


export default function BestItemApp() {
  return (
    <div className='bestItem'>
      <h3>Best.Item</h3>
      <BestItem images={images} />
    </div>
  )
}
