import React from "react";
import { useState } from "react";

export default function Question(props){
    return (
        <div className='question-div'>
        <p className='question'
        onClick={()=>props.active === props.questionNumber?
        props.setActive(0): props.setActive(props.questionNumber)}>Question {props.questionNumber}</p>
        {props.active === props.questionNumber?<p className='answer'>Answer {props.questionNumber}</p> : null}
        </div>
    )
}