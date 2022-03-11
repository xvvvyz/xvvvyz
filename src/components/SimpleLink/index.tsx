import * as C from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import type { LinkProps } from '@chakra-ui/react';

interface SimpleLinkProps extends LinkProps {
  backArrow?: boolean;
  text: string;
}

const SimpleLink = ({ backArrow, href, text, ...rest }: SimpleLinkProps) => (
  <NextLink href={href} passHref>
    <C.Link _hover={{ opacity: '1' }} opacity="0.8" {...rest}>
      {backArrow && (
        <C.Icon
          boxSize="1.4em"
          fill="none"
          mr={2}
          mt="-0.1em"
          stroke="currentColor"
          strokeWidth="1.3"
          viewBox="0 0 24 24"
        >
          <line x1="19" x2="5" y1="12" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </C.Icon>
      )}
      {text}
      {!backArrow && (
        <C.Icon
          boxSize="1.4em"
          fill="none"
          ml={2}
          mr="-0.2em"
          mt="-0.1em"
          stroke="currentColor"
          strokeWidth="1.3"
          viewBox="0 0 24 24"
        >
          <line x1="7" x2="17" y1="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </C.Icon>
      )}
    </C.Link>
  </NextLink>
);

export default SimpleLink;
