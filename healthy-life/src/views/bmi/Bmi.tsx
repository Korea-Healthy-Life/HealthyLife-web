import React, { useState } from 'react'





export default function Bmi() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);


  const inputHandler1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  }

  const inputHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  }


  const bmicalculator = (e: React.FormEvent) => {
    e.preventDefault();

    let bmi = weight / (height * height);
    
    if(18.5 > bmi){
    
      alert(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 저체중입니다`)
    
    } else if(18.5 <= bmi && bmi < 23){
    
      alert(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 정상입니다`)
    
    } else if(23 <= bmi && bmi < 25){
      
      alert(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 경계성 비만입니다`)
    
    } else if(25 <= bmi && bmi < 30){
      
      alert(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 비만입니다`)
    
    } else if(30 <= bmi && bmi < 35){
    
      alert(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 고도비만입니다`)
    
    } else if(35 <= bmi){
    
      alert(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 중증 고도비만입니다`)
    
    } else{
    
      alert('올바른 수치를 입력해주십시오')
    
    }
  }

  return (
    <div>
      <form>
        <label className='weight'>몸무게</label>
        <input type="number" className='weight' placeholder='몸무게를 입력하세요(kg)' value={weight} onChange={inputHandler1} />
        <br />
        <label className='height'>신장</label>
        <input type="number" className='height' value={height} placeholder='신장을 입력하세요(cm)' onChange={inputHandler2}/>

        <button onClick={bmicalculator}>Bmi 확인하기</button>
        <br />
        <br />
        
      </form>
    </div>


    // bmi = 몸무게 / 신장(제곱)
  )
}
