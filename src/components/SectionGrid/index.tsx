import * as C from '@chakra-ui/react';
import React from 'react';
import type { FC } from 'react';

const SectionGrid: FC = ({ children }) => (
  <C.Grid as="section" gap={9} pt={20} templateColumns={{ lg: '1fr 3fr' }}>
    {children}
  </C.Grid>
);

export default SectionGrid;
