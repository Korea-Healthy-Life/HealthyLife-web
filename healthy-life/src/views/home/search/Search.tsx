import React, { ChangeEvent } from 'react'
import '../../../style/home/Search.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Searchs } from './SearchApp';

interface SearchProps {
  search: Omit<Searchs, 'id' | 'isCompleted'>;
  onCreat: ()=> void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({search, onCreat, onChange}: SearchProps) {
  const {title} = search;
  return (
    <div className='search'>
      <form className='searchForm'>
      <input 
      type="text" 
      placeholder='검색어를 입력하세요.'
      className='searchInput'
      value={title}
      onChange={onChange}
      />
      <button onClick={onCreat}><SearchTwoToneIcon/></button>
      </form>
      
    </div>
  )
}
