import React, { useState } from 'react'
import '../../style/join/term.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Term() {
  const [activeMore1, setActiveMore1] = useState<string | null>(null);
  const [activeMore2, setActiveMore2] = useState<string | null>(null);
  const [changeBtn, setChangeBtn] = useState<string | string>(String);
  const handleClick1 = (menu: string) => {
    setActiveMore1(menu);
  };
  const handelCloseClick1 = () => {
    setActiveMore1(null);
  }
  const handleClick2 = (menu: string) => {
    setActiveMore2(menu);
  };
  const handelCloseClick2 = () => {
    setActiveMore2(null);
  }

  // 버튼 바꾸는 명령어
  const handelChangeBtn = (button : string) => {
    setChangeBtn(button);
  }


  return (
    <div>
      <ul className='termUl'>
            <h5>약관동의</h5>
          <li className='totalAgree'>
            <div className='labelInputDiv Agree'>
            <label  htmlFor="">전체 동의</label>
            <input type="checkbox" name="" id="" />
            </div>
          </li>

          <li>
            <div className='termsDiv'>
              <div className='labelInputContainer'>
                <div className='labelInputDiv'>
                <label htmlFor="">이용약관 동의</label>
                <input type="checkbox" />
                </div>
                <button 
                className='moreBtn'
                onClick={() => handleClick1('<ExpandMoreIcon />')}
                ><ExpandMoreIcon /></button>
                <button 
                className='moreBtn'
                onClick={handelCloseClick1}
                ><KeyboardArrowUpIcon /></button>
                
              </div>
              {activeMore1 === '<ExpandMoreIcon />' && 
              <div 
              className='contractContent'>
                제1조(목적) 이 약관은 업체 회사(전자상거래 사업자)가 운영하는 업체 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다. <br /><br /> ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」</div>
              }
            </div>
          </li>
          
          <li>
            <div className='termsDiv'>
              <div className='labelInputContainer'>
              <div className='labelInputDiv'>
              <label htmlFor="">개인정보 수집 및 이용 동의</label>
              <input type="checkbox" />
              </div>
                <button
                className='moreBtn'
                onClick={() => handleClick2('<ExpandMoreIcon />')}
                ><ExpandMoreIcon /></button>
                <button 
                className='moreBtn'
                onClick={handelCloseClick2}
                ><KeyboardArrowUpIcon  /></button>
              </div>
              {activeMore2 === '<ExpandMoreIcon />' &&
              <div className='contractContent'>
              개인정보처리방침<br /><br />
                1. 총칙<br />
                2. 개인정보 수집에 대한 동의<br />
                3. 개인정보의 수집 및 이용목적<br />
                4. 수집하는 개인정보 항목<br />
                5. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항<br />
                6. 목적 외 사용 및 제3자에 대한 제공<br />
                7. 개인정보의 열람 및 정정<br />
                8. 개인정보 수집, 이용, 제공에 대한 동의철회<br />
                9. 개인정보의 보유 및 이용기간<br />
                10. 개인정보의 파기절차 및 방법<br />
                11. 아동의 개인정보 보호<br />
                12. 개인정보 보호를 위한 기술적 대책<br />
                13. 개인정보의 위탁처리<br />
                14. 의겸수렴 및 불만처리<br />
                15. 부 칙(시행일) 
              </div>
              }
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Term