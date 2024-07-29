import React from 'react'
import '../../style/survey/suerveyStyle.css'

export default function SurveryList() {
  return (
    <div>
    <div className='surveyContainer'>
        <h3>체질/기호 선택</h3>
      <h5>평소식단을 어떻게하시나요?</h5>
      <ul className='surveyList'>
        <li>비건식</li>
        <li>육식</li>
        <li>지중해식</li>
        <li>상관없습니다.</li>
      </ul>

      <div className='surveyBtn'>
      <button className='surveyNextBtn'>Next</button>
      <br />
      <button className='surveySkipBtn'>Skip</button>
      </div>
    </div>
    </div>
  )
}
