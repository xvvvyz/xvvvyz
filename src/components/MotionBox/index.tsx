import * as C from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion(C.Box);

interface MotionLiProps {
  children: React.ReactNode;
  delay: number;
}

const MotionListItem = ({ children, delay }: MotionLiProps) => (
  <MotionBox
    animate={{
      opacity: 1,
      rotate: '0deg',
      transition: {
        delay,
        type: 'tween',
      },
      x: 0,
      y: 0,
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
