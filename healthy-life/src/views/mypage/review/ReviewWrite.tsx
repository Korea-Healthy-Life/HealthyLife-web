import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import '../../../style/mypage/ReviewWrite.css'

function ReviewWrite() {
  return (
    <div className='ReviewWriteContainer'>
      <h2>후기등록</h2>
        <div className='ReviewStar'>
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </div>
        <form action="" className='formContainer'>
        <div className='ReviewWriteTitleDiv'>
        <label htmlFor="">제목</label>       
        <input type="text" className='ReviewWriteTitle'/>
        </div>
        <div className='ReviewWriteContentDiv'> 
          <label htmlFor="">내용</label>
          <textarea className='ReviewWriteContent'/>
        </div>
        </form>
        <div className='ImgContainer'>
          <div className='ImgContainerDiv'></div>
          <div className='ImgContainerDiv'></div>
          <div className='ImgContainerDiv'></div>
          <div class>
          <input type="file" className='fileBtn'/>

          </div>
        </div>
          <div className='ReviewWriteBtn'>
            <button>등록</button>
            <button>취소</button>
          </div>
    </div>
  )
}

export default ReviewWrite