import '@fontsource/inter/400.css';
import 'focus-visible/dist/focus-visible';
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

const description = 'this is a meta description that nobody will read.';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      canonical="https://xvvvyz.xyz"
      defaultTitle="xvvvyz"
      description={description}
      openGraph={{
        description,
        locale: 'en_US',
        site_name: 'xvvvyz',
        title: 'xvvvyz',
        type: 'website',
        url: 'https://xvvvyz.xyz',
      }}
      twitter={{
        handle: '@xvvvyz',
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
              maxW: { base: 'container.xs' },
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
