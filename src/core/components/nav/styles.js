import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNav = styled(motion.div)`
  padding: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  cursor: pointer;
  font-family: 'Marcellus SC', cursive;

  h1 {
    color: #00ffee;
  }
`;

export const Search = styled(motion.form)`
  width: 40%;
  box-shadow: 0px 0px 20px #291f3e;
  input {
    width: 75%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px #900073;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    background: #900073;
    color: white;
    width: 25%;
    margin-top: 1rem;
    border-radius: 23px;
    box-shadow: 0px 0px 30px #900073;
  }
`;
