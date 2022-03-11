import * as C from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';
import type { NextPage } from 'next';
import BigLink from '../components/BigLink';
import CheckList from '../components/CheckList';
import SectionGrid from '../components/SectionGrid';
import SimpleLink from '../components/SimpleLink';
import { MotionListItem } from '../components/MotionBox';
import type { BigLinkProps } from '../components/BigLink';
import type { CheckListProps } from '../components/CheckList';

interface ProjectsProps extends BigLinkProps, CheckListProps {}

const projects: ProjectsProps[] = [
  {
    href: 'https://beema.finance',
    list: [
      'React',
      'Apollo Client',
      'Chakra UI',
      'Next.js',
      'AppSync',
      'DynamoDB',
      'Lambda',
      'Persona API',
      'Circle API',
      'Plaid API',
    ],
    text: 'Earn',
  },
  {
    href: 'https://lineradio.app',
    list: ['React', 'Sass', 'Gatsby', '8tracks API', 'Last.fm API'],
    text: 'Listen',
  },
  {
    href: 'https://541.ski',
    list: ['React', 'Rebass', 'Gatsby', 'Emotion', 'Shopify API'],
    text: 'Shop',
  },
];

const photos = [
  {
    alt: 'Goa',
    linkId: 'fOYFbyzm_cs',
    srcId: '1608697005000-2be78a1f1023',
  },
  {
    alt: 'Parkdale',
    linkId: 'MLgk2_seAWs',
    srcId: '1635202700468-b9c7a9c923d8',
  },
  {
    alt: 'Mt. Hood',
    linkId: '90Cx-flZSII',
    srcId: '1608697005557-80e46cfd396b',
  },
];

const IndexPage: NextPage = () => (
  <C.Container>
    <C.Text as="h1" textStyle="h1">
      Hey, I&rsquo;m Cade
      <C.Box as="span" color="fgSecondary">
        &mdash;a design-minded full-stack software engineer building
        on&nbsp;the&nbsp;www.
      </C.Box>
    </C.Text>
    <SectionGrid>
      <C.Text as="h2" textStyle="h2">
        Past &amp; future
      </C.Text>
      <C.Grid gap={{ base: 8, lg: 4 }}>
        <C.Text textStyle="p">
          Over the last seven years, I&rsquo;ve worked with several startups and
          small businesses to bring their visions to life. If you think
          I&rsquo;d be a good fit for your project or team,
          let&rsquo;s&nbsp;talk.
        </C.Text>
        <C.Stack
          align={{ base: 'flex-end' }}
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 4, lg: 8 }}
        >
          <SimpleLink
            href="https://www.linkedin.com/in/cadejscroggins/"
            isExternal
            text="Connect on LinkedIn"
          />
          <SimpleLink
            href="mailto:hello@cade.me"
            isExternal
            text="Send an email"
          />
        </C.Stack>
      </C.Grid>
    </SectionGrid>
    <SectionGrid>
      <C.Text as="h2" textStyle="h2">
        Live projects
      </C.Text>
      <C.Grid gap={4} templateColumns={{ lg: '1fr 1fr 1fr' }}>
        {projects.map(({ href, list, text }, i) => (
          <C.Box key={`project-${i}`}>
            <MotionListItem delay={0.1 * i}>
              <BigLink bg="bgTertiary" fg="fg" href={href} text={text} />
              <CheckList
                bg="bgSecondary"
                fg="fgSecondary"
                id={text}
                list={list}
              />
            </MotionListItem>
          </C.Box>
        ))}
      </C.Grid>
    </SectionGrid>
    <SectionGrid>
      <C.Text as="h2" textStyle="h2">
        Photographs
      </C.Text>
      <C.Grid gap={4} templateColumns={{ lg: '1fr 1fr 1fr' }}>
        {photos.map(({ alt, linkId, srcId }, i) => (
          <MotionListItem key={srcId} delay={0.1 * i}>
            <C.Link href={`https://unsplash.com/photos/${linkId}`} isExternal>
              <NextImage
                alt={alt}
                height={2880}
                layout="responsive"
                loader={({ quality, src, width }) =>
                  `https://images.unsplash.com/photo-${src}?w=${width}&q=${quality}`
                }
                quality={100}
                sizes="(max-width: 991px) 181px, 207px"
                src={srcId}
                width={1920}
              />
            </C.Link>
          </MotionListItem>
        ))}
      </C.Grid>
    </SectionGrid>
  </C.Container>
);

export default IndexPage;
