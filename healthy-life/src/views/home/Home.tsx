import React from 'react'
import MainApp from './banner/MainApp'
import Search from './search/Search'
import Main2 from './main2/Main2'
import NewItem from './newItem/NewItem'

export default function Home() {
  return (
    <div>
      
        <MainApp />
        <Search />
        <NewItem />
        <Main2/>
    </div>
  )
}
