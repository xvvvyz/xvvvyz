const React = require('react');
const Terser = require('terser');

const ThemeHydrationScriptTag = () => (
  <script
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: Terser.minify(`
        (function() {
          function setDarkMode(darkMode) {
            document.body.classList[darkMode ? 'add' : 'remove']('dark');
          }

          var preferDarkQuery = '(prefers-color-scheme: dark)';
          var mql = window.matchMedia(preferDarkQuery);
          var supportsColorSchemeQuery = mql.media === preferDarkQuery;
          var localStorageTheme = null;

          try {
            localStorageTheme = localStorage.getItem('dark');
          } catch (err) {}

          if (localStorageTheme !== null) {
            setDarkMode(JSON.parse(localStorageTheme));
          } else if (supportsColorSchemeQuery) {
            setDarkMode(mql.matches);
          } else {
            setDarkMode(false);
          }
        })();
      `).code,
    }}
  />
);

exports.onRenderBody = ({ setPreBodyComponents }) =>
  setPreBodyComponents([<ThemeHydrationScriptTag key="dark-mode" />]);
