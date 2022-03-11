import * as C from '@chakra-ui/react';
import React from 'react';

interface CheckListProps {
  bg?: string;
  fg?: string;
  id?: string;
  list: string[];
}

const CheckList = ({ bg, fg, id, list }: CheckListProps) => {
  const { isOpen, onToggle } = C.useDisclosure();

  return (
    <C.Collapse in={isOpen} startingHeight="6rem">
      <C.Grid
        _before={{
          bgGradient: 'linear(to-t, bg, transparent)',
          content: '" "',
          h: 'full',
          maxH: isOpen ? 'full' : '6rem',
          opacity: isOpen ? '0' : '1',
          pos: 'absolute',
          transition: 'all 0.2s',
          w: 'full',
        }}
        as={C.List}
        bg={bg}
        color={fg}
        cursor={isOpen ? 'n-resize' : 's-resize'}
        fontSize="xs"
        onClick={onToggle}
        pos="relative"
        gap={2}
        overflow="hidden"
        px={6}
        py={4}
        templateColumns={{ base: '1fr 1fr', lg: '1fr' }}
      >
        {list.map((tag) => (
          <C.ListItem key={`${id}-${tag}`}>
            <C.ListIcon
              boxSize="1.4em"
              fill="none"
              mr={2}
              mt="-0.1em"
              stroke="currentColor"
              strokeWidth="1.3"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12" />
            </C.ListIcon>
            {tag}
          </C.ListItem>
        ))}
      </C.Grid>
    </C.Collapse>
  );
};

export default CheckList;
export type { CheckListProps };
