import React from 'react'
import '../../../style/home/Search.css'
import { Searchs } from './SearchApp';
import CloseIcon from '@mui/icons-material/Close';

interface SearchProps {
  search: Searchs;
  toggleSearch: (id: number) => void;
  deleteSearch: (id: number) => void;
}

export default function Search({search, toggleSearch, deleteSearch}: SearchProps) {

  return (
      <div className='currentsearchList'>
      <span 
      onChange={()=> toggleSearch(search.id)}>
        {search.text}
      </span>
      <button onClick={() => deleteSearch(search.id)}><CloseIcon /></button>
      </div>
  )
}