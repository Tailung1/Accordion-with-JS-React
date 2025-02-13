import styled from "styled-components"


 export const Container= styled.main `
    background-color: #FFF;
    padding:13.2rem 2.4rem  4.8rem;
    display: flex;
    flex-direction: column;
    text-align:center ;
    align-items: center;
    border-radius: 2.3rem;
    background-image: url("/images/bg-pattern-mobile.svg");
    background-position:top 0 left 50% ;
    background-repeat: no-repeat;
    position: relative;
    width: 32.7rem;

    @media only screen and (min-width:90rem) {
        padding: 6.5rem 9.5rem 8.3rem 47.5rem;
        width: 92rem;
        background-image: url("/images/bg-pattern-desktop.svg"),
        url('/images/illustration-woman-online-desktop.svg');
        background-position:top -36rem left -59rem, top 3rem left -6rem ;
        align-items:flex-start ;

    }

`

export const Illustration = styled.img `
    position: absolute;
    top: -1.4rem;
    transform: translateY(-50%);
    width: 23.7rem;
    @media only screen and (min-width:90rem) {
        display: none;
    }
`
export const Questions = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.9rem;
    margin-top: 3.8rem;
`

export const Heading= styled.h1 `
    color: #1E1F36;
    font-size: 3.2rem;
    font-weight: 700;
`
export const Box = styled.img `
    display: none;
    @media only screen and (min-width:90rem) {
        display: block;
        position: absolute;
        top: 16rem;
        left: -9rem;

    }
`