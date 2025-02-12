import React from "react";
import { useState } from "react";

export default function Question(
    {active,setActive,questionNumber,questionObj}
){
    return (
        <div className='question-div'>
        <p className='question'
        onClick={()=>
            active === questionNumber
            ? setActive(0)
            : setActive(questionNumber)}
            > {questionObj.question}</p>

            {active === questionNumber ? <p className='answer'> {questionObj.answer} </p> : null }
        </div>
    )
}