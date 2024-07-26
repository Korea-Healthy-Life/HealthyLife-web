import React from 'react'
import '../../../style/home/Search.css'
import { Searchs } from './SearchApp';

interface SearchProps {
  search: Searchs;
  toggleSearch: (id: number) => void;
  deleteSearch: (id: number) => void;
}

export default function Search({search, toggleSearch, deleteSearch}: SearchProps) {

  return (
      <div>
      <span 
      onChange={()=> toggleSearch(search.id)}>
        {search.text}
      </span>
      <button onClick={() => deleteSearch(search.id)}>X</button>
      </div>
  )
}