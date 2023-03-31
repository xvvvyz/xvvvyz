import * as C from '@chakra-ui/react';
import React from 'react';
import { NextPage } from 'next';
import BigLink from '../components/BigLink';
import { MotionListItem } from '../components/MotionBox';
import { BigLinkProps } from '../components/BigLink';

const links: BigLinkProps[] = [
  {
    bg: '#cfe5f8',
    href: 'https://twitter.com/xvvvyz',
    text: 'Twitter',
  },
  {
    bg: '#d4f5eb',
    href: 'https://unsplash.com/@xvvvyz',
    text: 'Unsplash',
  },
  {
    bg: '#f6fcdc',
    href: 'https://github.com/xvvvyz/',
    text: 'GitHub',
  },
  {
    bg: '#ffedcd',
    href: 'mailto:xvvvyz@cade.me',
    text: 'Email',
  },
  {
    bg: '#fbdbca',
    href: 'https://github.com/xvvvyz.gpg',
    text: 'PGP Key',
  },
];

const LinksPage: NextPage = () => (
  <C.Center minH="100vh">
    <C.Container>
      <C.Grid gap={4}>
        {links.map(({ bg, href, text }, i) => (
          <MotionListItem delay={0.1 * i + 0.1} key={text}>
            <BigLink bg={bg} fg="bg" href={href} text={text} />
          </MotionListItem>
        ))}
      </C.Grid>
    </C.Container>
  </C.Center>
);

export default LinksPage;
