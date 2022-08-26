import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    &::-webkit-scrollbar{
      width: 0.8rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: #00a000;
    }
    &::-webkit-scrollbar-track {
    background: #494949;
  }
  }
  body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background-color: #202737;
  }
  h2{
    font-size: 3rem;
    font-family: 'Audiowide', cursive;
    font-weight: bolder;
    color: #f10000;
  }
  h3{
    font-size: 1.3rem;
    color: #dbdbdb;
    padding: 1.5rem 0rem;
  }
  p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #ba68ba
  }
`;

// font-family: 'Abril Fatface', cursive;

// font-family: 'Audiowide', cursive;

// font-family: 'Bad Script', cursive;

// font-family: 'Great Vibes', cursive;

// font-family: 'Italianno', cursive;

// font-family: 'Luckiest Guy', cursive;

// font-family: 'Marcellus SC', serif;

// font-family: 'Montserrat', sans-serif;

// font-family: 'My Soul', cursive;

// font-family: 'Qwigley', cursive;

// font-family: 'Splash', cursive;

// font-family: 'Tangerine', cursive;
