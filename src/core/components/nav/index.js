import React from 'react';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

import * as Styles from './styles';
import { fetchSearch } from '../../../store/action/game-action';
import { FadeIn } from '../../constants/animation';

export const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = e => {
    setTextInput(e.target.value);
  };

  const submitSearch = e => {
    dispatch(fetchSearch(textInput));
    e.preventDefault();
    setTextInput('');
  };

  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };

  return (
    <Styles.StyledNav variants={FadeIn} initial="hidden" animate="show">
      <Styles.Logo onClick={clearSearched}>
        <img src="/img/logo.svg" alt="logo" />
        <h1>Ignite</h1>
      </Styles.Logo>

      <Styles.Search>
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </Styles.Search>
    </Styles.StyledNav>
  );
};
