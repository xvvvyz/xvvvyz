import * as C from '@chakra-ui/react';
import React from 'react';

interface BigLinkProps {
  bg?: string;
  fg?: string;
  href: string;
  text: string;
}

const BigLink = ({ bg, fg, text, ...rest }: BigLinkProps) => (
  <C.Button
    _hover={{ opacity: '1' }}
    as={C.Link}
    bg={bg}
    color={fg}
    isExternal
    opacity="0.8"
    rightIcon={
      <C.Icon
        boxSize="1.4em"
        fill="none"
        mr="-0.2em"
        mt="0.1em"
        stroke="currentColor"
        strokeWidth="1.3"
        viewBox="0 0 24 24"
      >
        <line x1="7" x2="17" y1="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </C.Icon>
    }
    size="xl"
    variant="primary"
    w="full"
    {...rest}
  >
    {text}
  </C.Button>
);

export default BigLink;
export type { BigLinkProps };
