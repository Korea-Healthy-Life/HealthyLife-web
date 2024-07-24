import React from 'react'
import { Searchs } from './SearchApp'
import '../../../style/home/Search.css'

interface SearchPops {
  searchs: Searchs[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function SearchList({searchs, onToggle, onRemove}: SearchPops) {
  return (
    <div className='searchContainer'>
      <div className='currentSearch'>
        <h5>최근검색어</h5>
      {searchs.map((search) => (
        <div key={search.id}>
          <ul>
            <li onClick={() => onToggle(search.id)}>{search.title}</li>
          </ul>
          <button onClick={()=> onRemove(search.id)}>x</button>
        </div>
      ))}
      </div>

      <div className='line'></div>

        <div className='popularSearch'>
          <h5>인기키워드</h5>
          <ul>
            <li></li>
          </ul>
        </div>

    </div>
  
  )
}
