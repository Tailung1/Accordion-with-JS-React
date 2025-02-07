import { useState } from 'react'
import './App.css'
import Question from './components/Question';

function App() {
    const [active,setActive]=useState(0);
    const questionsAmount=[1,2,3,4,5]
  return (
    <>
      <div className='container'>
        {questionsAmount.map((questionNumber)=>{
            return (
                <Question key={questionNumber} active={active} setActive={setActive} questionNumber={questionNumber}/>
            )
        })}
      </div>
    </>
  )
}

export default App
