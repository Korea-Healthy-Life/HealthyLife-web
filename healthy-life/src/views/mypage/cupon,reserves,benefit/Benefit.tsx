import React from 'react'
import '../../../style/benefit/benefit.css'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';



function Benefit() {

  return (
    <div className='benefitContainer'>
      <br />
      <br />
      <h3>등급별 혜택 안내</h3>
      <br />
      <br />
      

    <div className='benefitGuide'>

      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
        <LooksOneIcon/>
        </div>

        <div className='grade'>
        <p>자격조건 200만원 이상</p>
        <p>15만 포인트 제공</p>
        </div>

        </div>
      <br />
      <hr />

      <div className='gradeContainer'>
        <br />
        
        <div className='Icon'>
        <LooksTwoIcon/>
        </div>
        

        <div className='grade'>
        <p>자격조건: 100만원 이상</p>
        <p>12만 포인트 제공</p>
        </div>
      
      </div>
      <br />
      <hr />

      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
        <Looks3Icon/>
        </div>

        <div className='grade'>
        <p>자격조건: 60만원 이상</p>
        <p>10만 포인트 제공</p>
        </div>

      </div>
      <br/>
      <hr />


      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
        <Looks4Icon/>
        </div>
        
        <div className='grade'>
        <p>40만원이상</p>
        <p>7만 포인트 제공</p>
        </div>
        
        </div>
      <br />
      <hr />


      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
        <Looks5Icon/>
        </div>
        
        <div className='grade'>
        <p>20만원 이상</p>
        <p>5만 포인트 제공</p>
        </div>
        
        </div>
      <br />
      <hr />


        <div className='gradeContainer'>
          <br />

          <div className='Icon'>
          <Looks6Icon/>
          </div>
          
          <div className='grade'>
          <p>20만원 미만</p>
          </div>

        </div>
        <br />

    </div>

    </div>
  )
  
} 
  


export default Benefit;