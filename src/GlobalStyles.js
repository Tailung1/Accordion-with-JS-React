import { createGlobalStyle } from "styled-components";

const GlobalStyles= createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Kumbh+Sans:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:wght@300;400;600&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Space+Mono:wght@400;700&display=swap');
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}
    html {
        font-size:62.5%;
    }

    body {
        font-family: "Kumbh Sans", serif;
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
    }
`
export default GlobalStyles;
