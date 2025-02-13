import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";

export default function Question({
        active,
        setActive,
        questionNumber,
        questionObj
    }){
    return (
            <QuestionAnswerDiv onClick={()=>
                active === questionNumber
                   ? setActive(0)
                   : setActive(questionNumber)}>
                 <QuestionDiv>
                <QuestionParagraph active={active} questionNumber={questionNumber}> 
                {questionObj.question}
                </QuestionParagraph>
                   <img src={Arrow} alt="arrow-icon" style={active === questionNumber?
                   {transform:"rotate(180deg)"}:null}/>
                </QuestionDiv>
            {active === questionNumber ? <Answer> {questionObj.answer} </Answer> : null }
           </QuestionAnswerDiv>
    )
}

const QuestionAnswerDiv = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    width: 27.9rem;
    border-bottom:1px solid #E8E8EA; 
    padding-bottom: 1.6rem;
    cursor: pointer;
`

const QuestionDiv= styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const QuestionParagraph = styled.p `
    ${({active,questionNumber}) =>`
        color: #4B4C5F;
        font-size: 1.3rem;
        font-weight: ${active=== questionNumber? "700" : "400"};
           
    `}
    transition: 0.3s;
    @media only screen and (min-width:90rem) {
        &:hover {
            color:#F47B56;
        }
    }
    
`
const Answer= styled(QuestionParagraph) `
    text-align: left;
    font-weight: 400;
`