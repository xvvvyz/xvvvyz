import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
      <q
        dangerouslySetInnerHTML={{
          __html: `
<!--

Hi! If you really want to grok my sauce—
the ingredients can be found here:

https://github.com/cadejscroggins/cade.me

-->
`,
        }}
        style={{ display: 'none' }}
      />
    </body>
  </Html>
);

export default Document;
