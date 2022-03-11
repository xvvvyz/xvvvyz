import '@fontsource/inter/400.css';
import 'focus-visible/dist/focus-visible';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      canonical="https://cade.me"
      defaultTitle="Cade Scroggins — Software engineer & designer"
      description="Foo bar baz."
      openGraph={{
        description: 'Foo bar baz.',
        locale: 'en_US',
        site_name: 'Cade Scroggins',
        title: 'Cade Scroggins',
        type: 'website',
        url: 'https://cade.me',
      }}
      titleTemplate="%s - Cade Scroggins"
      twitter={{
        handle: '@cadejscroggins',
      }}
    />
    <ChakraProvider
      resetCSS
      theme={extendTheme({
        colors: {
          bg: '#111',
          bgSecondary: '#181818',
          bgTertiary: '#222',
          fg: '#eee',
          fgSecondary: '#888',
        },
        components: {
          Button: {
            baseStyle: {
              fontWeight: 'normal',
              opacity: 0.8,
            },
            sizes: {
              xl: {
                px: 6,
                py: 4,
              },
            },
            variants: {
              primary: {
                borderRadius: 'none',
                justifyContent: 'space-between',
              },
            },
          },
          Container: {
            baseStyle: {
              maxW: { base: 'container.xs', lg: 'container.lg' },
              px: 4,
              py: 24,
            },
          },
          Link: {
            baseStyle: {
              _hover: {
                textDecor: 'none',
              },
            },
          },
        },
        fonts: {
          body: 'Inter, sans-serif',
          heading: 'Inter, sans-serif',
        },
        sizes: {
          container: {
            xs: '480px',
          },
        },
        styles: {
          global: {
            body: {
              bg: 'bg',
              color: 'fg',
            },
            html: {
              fontSize: ['4.56vw', '22px'],
            },
          },
        },
        textStyles: {
          h1: {
            fontSize: { base: '3xl', lg: '4xl' },
            lineHeight: '1.3',
            maxW: 'container.md',
          },
          p: {
            color: 'fgSecondary',
            lineHeight: '1.6',
            maxW: 'container.sm',
          },
        },
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default App;
