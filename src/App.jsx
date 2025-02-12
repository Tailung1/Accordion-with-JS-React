import { useState } from 'react'
import './App.css'
import questions from "./questions.json"
import Question from './components/Question';

function App() {
    const [active,setActive]=useState(0);
    const questionsAmount=[1,2,3,4,5]
  return (
    <>
      <div className='container'>
        {questions.map((questionObj,index)=>{
            return (
                <Question key={index} active={active} setActive={setActive} questionNumber={index + 1}/>
            )
        })}
      </div>
    </>
  )
}

export default App