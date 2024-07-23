import React, { useEffect, useRef, useState } from 'react'
import '../../../style/home/Search.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

interface SearchProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

const loadSearch = ():SearchProps[] => {
  const stroedSearch = localStorage.getItem('searcg');
  return stroedSearch ? JSON.parse(stroedSearch) : 
  [];
}

export default function Search() {
  const [searches, setSearches] = useState<SearchProps[]>(loadSearch);
  const [inputValue, setInputValue] =useState<string>('');

  let  nextInitialValue = searches.length > 0 
  ? Math.max(...searches.map(search => search.id)) +1
  : 1 ;

  const nextId = useRef(nextInitialValue);
  
  const addSearch = () => {
    if (inputValue.trim() === '') return;

    setSearches([...searches, {
      id: nextId.current,
      title: inputValue,
      isCompleted: false
    }]);

    setInputValue('');
    nextId.current += 1;
  }

  const toggleSearch = (id: number) => {
    setSearches(
      searches.map(search =>
        search.id === id
        ? {...search, isCompleted: !search.isCompleted
        }
        : search
      )
    );
  }
  
  useEffect(() => {
    localStorage.setItem('searches', JSON.stringify(searches));
  }, [searches]);

  return (
    <div className='search'>
      <form className='searchForm'>
      <input 
      type="text" 
      placeholder='검색어를 입력하세요.'
      className='searchInput'
      value={inputValue}
      onChange={(e)=> setInputValue(e.target.value)}
      onKeyDown={(e) => (e.key === 'Enter' ? addSearch() : null)}
      />
      <button onClick={addSearch}><SearchTwoToneIcon/></button>
      </form>
      <div className='searchContainer'>
        <div className='currentSearch'>
          <h5>최근검색어</h5>
          <ul>
            <li></li>
          </ul>
        </div>
          <div className='line'></div>
        <div className='popularSearch'>
          <h5>인기키워드</h5>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
