import React from 'react'
import Main1 from './main01/Main1'
import MainApp from './banner/MainApp'
import Search from './search/Search'
import Main2 from './main2/Main2'

export default function Home() {
  return (
    <div>
      
        <MainApp />
        <Search />
        <Main1 />
        <Main2/>
    </div>
  )
}
