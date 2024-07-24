import React from 'react'
import TodayItem from './TodayItem'



const images = [    'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  'https://via.placeholder.com/800x400?text=Image+4',
  'https://via.placeholder.com/800x400?text=Image+5',
  'https://via.placeholder.com/800x400?text=Image+6',
  'https://via.placeholder.com/800x400?text=Image+7',
  'https://via.placeholder.com/800x400?text=Image+8',
  'https://via.placeholder.com/800x400?text=Image+9',
  'https://via.placeholder.com/800x400?text=Image+10'];


export default function TodayItemApp() {
  return (
    <div className='todayItem'>
      <h3>오늘의 아이템</h3>
      <TodayItem images={images}/>
    </div>
  )
}
