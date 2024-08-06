import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../../../style/QnA.css'
import { Pagination } from '@mui/material';
import ModalExample from './modal/ModalExample';

function QNA() {
  return (
    <div className='productQnaContainer'>
    <div className='titleModalBtnDiv'>
      <h5>QnA</h5>
      <ModalExample/>
    </div>
    <div>
      <ul className='qnaTotalUl'>
        <li className='qnaTotalLi'>
            <p>답벼완료여부</p>
            <pre>리뷰 내용 ...... 끄젓끄젓 </pre>
            <p>(id****) | (등록날짜)</p>
        </li>
        <li className='qnaTotalLi'>
            <p>답벼완료여부</p>
            <pre>리뷰 내용 ...... 끄젓끄젓 </pre>
            <p>(id****) | (등록날짜)</p>
        </li>
      </ul>
    </div>
        <div className='pagination'>
          <Pagination />
        </div>
  </div>
  )
  }
export default QNA