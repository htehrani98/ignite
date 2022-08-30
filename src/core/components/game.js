import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { loadDetail } from "../actions/detail-action";
import { smallImage } from "./resize";

export const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    //  what the hell is going on up here
    dispatch(loadDetail(id));
    console.log(id);
  };

  // episode10 at 13:45 pashshshmaam
  //and why we don't use dispatch(loadDetail) in the onClick though
  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
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
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgb(255, 155, 255, 0.5);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
