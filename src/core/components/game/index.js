import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import * as Styles from './styles';
import { loadDetail } from '../../../store/action/detail-action';
import { smallImage } from '../../utils/resize';
import { Popup } from '../../constants/animation';

export const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    //  what the hell is going on up here
    dispatch(loadDetail(id));
    console.log(id);
  };

  // episode10 at 13:45 pashshshmaam
  //and why we don't use dispatch(loadDetail) in the onClick though
  return (
    <Styles.StyledGame
      variants={Popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          // and why like this and not like up here in StyledGame
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </Styles.StyledGame>
  );
};
