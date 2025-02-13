import { useState } from 'react';
import questions from "./questions.json";
import Question from './components/Question';
import GlobalStyles from './GlobalStyles';
import womanIllustartion from "/images/illustration-woman-online-mobile.svg"
import boxImage from "/images/illustration-box-desktop.svg"
import { Container,Illustration,Box,Heading,Questions } from './styled-components/app';


function App() {
    const [active,setActive]=useState(0);
  return (
    <>
    <GlobalStyles />
      <Container>
        <Illustration src={womanIllustartion} alt='woman-illustation'/>
        <Box src={boxImage} alt="box" />
        
        <Heading>FAQ</Heading>
        <Questions>
        {questions.map((questionObj,index)=>{
            return (
                <Question
                key={index}
                active={active}
                setActive={setActive}
                questionObj={questionObj}
                questionNumber={index + 1}/>
            )
        })}
        </Questions>
      </Container>
    </>
  )
}
export default App


