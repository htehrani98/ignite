import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { smallImage } from "./resize";

export const GameDetail = (pathId) => {
  const navigate = useNavigate();
  console.log(typeof pathId.pathId);

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
      // location.push("/");
    }
  };
  const getPlatform = (platform) => {
    switch (platform) {
      case "playStation":
        return "/img/playstation.svg";
      case "Xbox One":
        return "/img/xbox.svg";
      case "PC":
        return "/img/steam.svg";
      case "Nintendo Switch":
        return "/img/nintendo.svg";
      case "ios":
        return "/img/apple.svg";
      default:
        return "/img/gamepad.svg";
    }
  };
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId.pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId.pathId}`}>
                  {game.name}
                </motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platform>
                  {game.platforms?.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId.pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results?.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.7rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #515151;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #202737;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

// style haye taarif shode dar home, global-styles, games tadakhol nadarand?
