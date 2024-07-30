import React, { useState } from 'react'
import '../../style/bmi/bmiCalculator.css'




export default function Bmi() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState('');

  const inputHandler1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  }

  const inputHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(e.target.value));
  }


  const bmiCalculator = (e: React.FormEvent) => {
    e.preventDefault(); 

    let m = height * 0.01;
    let bmiheight = m * m;
    let bmi = weight / bmiheight;
    
    if(18.5 > bmi){
    
      setResult(`당신의 신체질량지수(BMI)는 ${bmi} (으로) 저체중입니다`)
    
    } else if(18.5 <= bmi && bmi < 23){
    
      setResult(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 정상입니다`)
    
    } else if(23 <= bmi && bmi < 25){
      
      setResult(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 경계성 비만입니다`) 
    
    } else if(25 <= bmi && bmi < 30){
      
      setResult(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 비만입니다`) 
    
    } else if(30 <= bmi && bmi < 35){
    
      setResult(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 고도비만입니다`) 
    
    } else if(35 <= bmi){
    
      setResult(`당신의 신체질량지수(BMI)는 ${bmi}(으로) 중증 고도비만입니다`) 
    
    } else{
    
      setResult(`올바른 수치를 입력하세요`)
    
    }

    setHeight(0)
    setWeight(0)
  }

  return (
    <div>
      <form className='bmiCalculator'>
        <br />
        <label className='weightlabel' id='weight'>몸무게(kg)</label>
        <input type="text" className='weight' placeholder='몸무게를 입력하세요(kg)' value={weight} onChange={inputHandler1} />
        <br />
        <br />
        <label className='heightlabel' id='height'>신장(cm)</label>
        <input type="text" className='height' value={height} placeholder='신장을 입력하세요(cm)' onChange={inputHandler2}/>
        <br />
        <button className='calculatorButton' onClick={bmiCalculator}>Bmi 확인하기</button>
        <br />
        <br />
        <p>{result}</p>
      </form>
    </div>


    // bmi = 몸무게 / 신장(제곱)
  )
}
