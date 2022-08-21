import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Game = (name, released, image) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </div>
  );
};
