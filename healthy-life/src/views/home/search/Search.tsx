import React from 'react'
import '../../../style/home/Search.css'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

export default function Search() {
  return (
    <div className='search'>
      <form className='searchForm'>
        <label><SearchTwoToneIcon/></label>
      <input 
      type="text" 
      placeholder='검색어를 입력하세요.'
      className='searchInput'
      />
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
