import * as C from '@chakra-ui/react';
import React from 'react';
import { NextPage } from 'next';
import BigLink from '../components/BigLink';
import MotionBox, { MotionListItem } from '../components/MotionBox';
import type { BigLinkProps } from '../components/BigLink';

const links: BigLinkProps[] = [
  {
    bg: '#d7d8f9',
    href: 'https://www.linkedin.com/in/cadescroggins/',
    text: 'LinkedIn',
  },
  {
    bg: '#cfe5f8',
    href: 'https://github.com/xvvvyz/',
    text: 'GitHub',
  },
  {
    bg: '#d4f5eb',
    href: 'https://dribbble.com/xvvvyz',
    text: 'Dribbble',
  },
  {
    bg: '#f6fcdc',
    href: 'https://twitter.com/xvvvyz',
    text: 'Twitter',
  },
  {
    bg: '#ffedcd',
    href: 'https://unsplash.com/@xvvvyz',
    text: 'Unsplash',
  },
  {
    bg: '#fbdbca',
    href: 'https://www.tiktok.com/@xvvvyz',
    text: 'TikTok',
  },
  {
    bg: '#f3d0ca',
    href: 'mailto:hey@cade.me',
    text: 'Email',
  },
  {
    bg: '#e3c4c8',
    href: '/pk.asc',
    text: 'PGP Key',
  },
];

const colorList = links.map((l) => l.bg).join(',');

const LinksPage: NextPage = () => (
  <C.Center minH="100vh">
    <C.Container>
      <MotionBox
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -5 }}
        transition={{ type: 'tween' }}
      >
        <C.Text as="h1" color="fgSecondary" textStyle="h1">
          <C.Box
            as="span"
            bgClip="text"
            bgGradient={`linear(to-tl, ${colorList})`}
          >
            Hyperlinks!
          </C.Box>{' '}
          There are many like them, but these are mine.
        </C.Text>
      </MotionBox>
      <C.Grid gap={4} mt={7} templateColumns={{ lg: 'repeat(4, 1fr)' }}>
        {links.map(({ bg, href, text }, i) => (
          <MotionListItem key={text} delay={0.1 * i + 0.1}>
            <BigLink bg={bg} fg="bg" href={href} text={text} />
          </MotionListItem>
        ))}
      </C.Grid>
    </C.Container>
  </C.Center>
);

export default LinksPage;
