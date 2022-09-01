import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { fetchSearch } from "../actions/game-action";

export const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    dispatch(fetchSearch(textInput));
    e.preventDefault();
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src="/img/logo.svg" alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <Search>
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </Search>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  cursor: pointer;
  font-family: "Marcellus SC", cursive;
  h1 {
    color: #00ffee;
  }
`;

const Search = styled(motion.form)`
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
