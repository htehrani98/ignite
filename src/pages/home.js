import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

import { loadGames } from "../core/actions/game-action";
import { Game } from "../core/components/game";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const { popular, upComing, newGames } = useSelector((state) => state.games);
  return (
    <GameList>
      <h1>Home</h1>
      <Games>
        {upComing.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;
