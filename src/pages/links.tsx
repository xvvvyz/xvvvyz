import * as C from '@chakra-ui/react';
import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import BigLink from '../components/BigLink';
import MotionBox, { MotionListItem } from '../components/MotionBox';
import SimpleLink from '../components/SimpleLink';
import type { BigLinkProps } from '../components/BigLink';

const links: BigLinkProps[] = [
  {
    bg: '#d7d8f9',
    href: 'https://www.linkedin.com/in/cadejscroggins/',
    text: 'LinkedIn',
  },
  {
    bg: '#cfe5f8',
    href: 'https://github.com/cadejscroggins/',
    text: 'GitHub',
  },
  {
    bg: '#d4f5eb',
    href: 'https://dribbble.com/cadejscroggins',
    text: 'Dribbble',
  },
  {
    bg: '#f6fcdc',
    href: 'https://twitter.com/cadejscroggins',
    text: 'Twitter',
  },
  {
    bg: '#ffedcd',
    href: 'https://unsplash.com/@cadejscroggins',
    text: 'Unsplash',
  },
  {
    bg: '#fbdbca',
    href: 'https://www.instagram.com/cadejscroggins/',
    text: 'Instagram',
  },
  {
    bg: '#f3d0ca',
    href: 'mailto:hello@cade.me',
    text: 'Email',
  },
  {
    bg: '#e3c4c8',
    href: '/pgp.txt',
    text: 'PGP Key',
  },
];

const colorList = links.map((l) => l.bg).join(',');

const LinksPage: NextPage = () => (
  <C.Center minH="100vh">
    <NextSeo title="Hyperlinks" />
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
      <C.Flex justify="flex-end" mt={8}>
        <MotionBox
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 5 }}
          transition={{ delay: 0.9, type: 'tween' }}
        >
          <SimpleLink backArrow href="/" text="Who are you, what do you do?" />
        </MotionBox>
      </C.Flex>
    </C.Container>
  </C.Center>
);

export default LinksPage;
