import React from 'react';

import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import * as Styles from './styles';
import { smallImage } from '../../utils/resize';

export const GameDetail = pathId => {
  const { screen, game, isLoading } = useSelector(state => state.detail);
  const navigate = useNavigate();
  console.log(typeof pathId.pathId);

  const exitDetailHandler = e => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      navigate('/');
      // location.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src="/img/star-full.png" />);
      } else {
        stars.push(<img alt="star" key={i} src="/img/star-empty.png" />);
      }
    }
    return stars;
  };

  const getPlatform = platform => {
    switch (platform) {
      case 'playStation':
        return '/img/playstation.svg';
      case 'PlayStation 4':
        return '/img/playstation.svg';
      case 'PlayStation 5':
        return '/img/playstation.svg';
      case 'Xbox One':
        return '/img/xbox.svg';
      case 'Xbox Series S/X':
        return '/img/xbox.svg';
      case 'PC':
        return '/img/steam.svg';
      case 'Nintendo Switch':
        return '/img/nintendo.svg';
      case 'ios':
        return '/img/apple.svg';
      default:
        return '/img/gamepad.svg';
    }
  };
  return (
    <>
      {!isLoading && (
        <Styles.CardShadow className="shadow" onClick={exitDetailHandler}>
          <Styles.Detail layoutId={pathId.pathId}>
            <Styles.Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId.pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars(game)}
              </div>
              <Styles.Info>
                <h3>Platforms</h3>
                <Styles.Platform>
                  {game.platforms?.map(data => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Styles.Platform>
              </Styles.Info>
            </Styles.Stats>
            <Styles.Media>
              <motion.img
                layoutId={`image ${pathId.pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Styles.Media>
            <Styles.Description>
              <p>{game.description_raw}</p>
            </Styles.Description>
            <div className="gallery">
              {screen.results?.map(screen => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Styles.Detail>
        </Styles.CardShadow>
      )}
    </>
  );
};
