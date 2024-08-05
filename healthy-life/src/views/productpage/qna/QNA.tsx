import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../../../style/Review.css'
import { Pagination } from '@mui/material';
import ModalExample from './modal/ModalExample';

function QNA() {
  return (
    <div className='productReviewContainer'>
    <div className='titleSelctDiv'>
    <h5>QnA</h5>
    <ModalExample/>
    </div>
    <div>
      <ul className='totalUl'>
        <li className='totalLi'>
          <ul>
            <li className='reviewDetaiLi'>
              <div className='reviewImgSpanDiv'>
              <div>
              <AccountCircle/>
              <span>(id****) | (등록날짜)</span>
              </div>
              </div>
              </li>
                <pre>리뷰 내용 ...... 끄젓끄젓 </pre>
          </ul>
        </li>
            
      </ul>
    </div>
          <Pagination />
  </div>
  )
  }
export default QNA