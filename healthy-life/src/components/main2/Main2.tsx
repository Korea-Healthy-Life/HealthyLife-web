import React from 'react'
import BestItemApp from './BestItemApp'
import TodayItemApp from './TodayItemApp'
import BannerApp from './BannerApp'
export default function Main2() {
  return (
    <div>

      <h2>Best.Item</h2>
      <BestItemApp/>
      <br />
      <br />
      <BannerApp/>

      <h2>오늘의 추천템</h2>
      <TodayItemApp />
    </div>
  )
}
