import * as C from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

const MotionBox = motion(C.Box);

interface MotionLiProps {
  delay: number;
}

const MotionListItem: FC<MotionLiProps> = ({ children, delay }) => (
  <MotionBox
    animate={{
      opacity: 1,
      rotate: '0deg',
      x: 0,
      y: 0,
      transition: {
        delay,
        type: 'tween',
      },
    }}
    initial={{
      opacity: 0,
      rotate: '1deg',
      x: -5,
      y: 10,
    }}
    whileTap={{
      scale: 0.98,
      transition: {
        duration: 0,
      },
    }}
  >
    {children}
  </MotionBox>
);

export default MotionBox;
export { MotionListItem };
