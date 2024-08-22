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
      <h2 style={{textAlign: 'start'}}>등급별 혜택 안내</h2>
      <br />
      

    <div className='benefitGuide'>

      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
          <br />
        <LooksOneIcon/>
        </div>

        <div className='grade'>
          <br />
        <p>자격조건: 200만원 이상 구매</p>
        <br />
        <p>혜택: 15만 포인트 제공</p>
        </div>

        </div>
      <br />
      <hr />

      <div className='gradeContainer'>
        <br />
        
        <div className='Icon'>
          <br />
        <LooksTwoIcon/>
        </div>
        

        <div className='grade'>
          <br />
        <p>자격조건: 100만원 이상 구매</p>
        <br />
        <p>혜택: 12만 포인트 제공</p>
        </div>
      
      </div>
      <br />
      <hr />

      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
          <br />
        <Looks3Icon/>
        </div>

        <div className='grade'>
          <br />
        <p>자격조건: 60만원 이상 구매</p>
        <br />
        <p>혜택: 10만 포인트 제공</p>
        </div>

      </div>
      <br/>
      <hr />


      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
          <br />
        <Looks4Icon/>
        </div>
        
        <div className='grade'>
          <br />
        <p>자격조건: 40만원이상 구매</p>
        <br />
        <p>혜택: 7만 포인트 제공</p>
        </div>
        
        </div>
      <br />
      <hr />


      <div className='gradeContainer'>
        <br />

        <div className='Icon'>
          <br />
        <Looks5Icon/>
        </div>
        
        <div className='grade'>
          <br />
        <p className='cutLine'>자격조건: 20만원 이상 구매</p>
        <br />
        <p>혜택: 5만 포인트 제공</p>
        </div>
        
        </div>
      <br />
      <hr />


        <div className='gradeContainer'>
          <br />

          <div className='Icon2'>
            <br />
          <Looks6Icon/>
          </div>
          
          <div className='grade'>
            <br />
            <br />
          <p>20만원 미만 구매시</p>
          <br />
          </div>

        </div>
        <br />

    </div>

      
    </div>
  )
  
} 
  


export default Benefit;