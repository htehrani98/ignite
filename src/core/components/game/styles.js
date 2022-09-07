import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledGame = styled(motion.div)`
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
  a {
    text-decoration: none;
  }
`;
