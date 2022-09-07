import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { loadGames } from '../../store/action/game-action';
import { Game } from '../../core/components/game';
import { GameDetail } from '../../core/components/game-detail';
import { FadeIn } from '../../core/constants/animation';
import * as styles from './styles';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const { popular, upComing, newGames, searched } = useSelector(state => state.games);

  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  return (
    <styles.GameList variants={FadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <styles.Games>
              {searched.map(game => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </styles.Games>
          </div>
        ) : (
          ''
        )}
        <h2>Upcoming Games</h2>
        <styles.Games>
          {upComing.map(game => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </styles.Games>
        <h2>Popular Games</h2>
        <styles.Games>
          {popular.map(game => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </styles.Games>
        <h2>New Games</h2>
        <styles.Games>
          {newGames.map(game => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </styles.Games>
      </AnimateSharedLayout>
    </styles.GameList>
  );
};
