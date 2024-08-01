import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../../../style/Review.css'

function Review() {
  return (
    <div className='productReviewContainer'>
      <div className='titleSelctDiv'>
      <h3>후기</h3>
      <div className='labelInput'>
      <select name="" id="">
        <option value="">최신</option>
        <option value="">과거</option>
      </select>
      <div>
        <label>키워드 검색</label>
        <input type="text" />
        <SearchIcon />
      </div>
      </div>
      </div>


      <div>
        <ul>
          <li>
            <img src="https://media.istockphoto.com/id/1978764024/ko/%EC%82%AC%EC%A7%84/%EB%8B%AD-%EA%B0%80%EC%8A%B4%EC%82%B4%EC%9D%84-%ED%86%B5%EC%A7%B8%EB%A1%9C-%EA%B5%AC%EC%9B%8C-%EB%A0%88%EB%AA%AC%EC%9D%84-%EA%B3%81%EB%93%A4%EC%9D%B8-%EB%8F%84%EB%A7%88%EC%97%90-%EC%96%87%EA%B2%8C-%EC%8D%AC-%EC%9A%94%EB%A6%AC.jpg?s=2048x2048&w=is&k=20&c=iSrDKGXu-EYF_B7sAk_VQhJ8A3bRnkMCZQ_Ahyz2Enc=" alt="" width={200}/>
            <ul>
              <li>
                <div>
                <AccountCircle />
                <div>
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </div>
                <span>(id****) | (등록날짜)</span>
                </div>
                  <pre>리뷰 내용 ...... 끄젓끄젓 </pre>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Review