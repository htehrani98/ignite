import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { loadDetail } from "../actions/detail-action";

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  // episode10 at 13:45 pashshshmaam
  //and why we don't use dispatch(loadDetail) in the onClick though
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgb(255, 155, 255, 0.5);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
