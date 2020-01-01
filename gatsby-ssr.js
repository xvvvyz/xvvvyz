const PropTypes = require('prop-types');
const React = require('react');
const Terser = require('terser');
const themes = require('./themes');

const generateNoFlashScript = ({ storageKey }) => `
  (function(storageKey) {
    function setColorOnDocumentBody(darkMode) {
      document.body.style.background = darkMode
        ? '${themes.dark.backgroundPrimary}'
        : '${themes.light.backgroundPrimary}';
    }

    var preferDarkQuery = '(prefers-color-scheme: dark)';
    var mql = window.matchMedia(preferDarkQuery);
    var supportsColorSchemeQuery = mql.media === preferDarkQuery;
    var localStorageTheme = null;

    try {
      localStorageTheme = localStorage.getItem(storageKey);
    } catch (err) {}

    if (localStorageTheme !== null) {
      setColorOnDocumentBody(JSON.parse(localStorageTheme));
    } else if (supportsColorSchemeQuery) {
      setColorOnDocumentBody(mql.matches);
    } else {
      setColorOnDocumentBody(false);
    }
  })('${storageKey}');
`;

const ThemeHydrationScriptTag = ({ storageKey }) => {
  const noFlashScript = generateNoFlashScript({ storageKey });
  const finalNoFlashScript = Terser.minify(noFlashScript).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: finalNoFlashScript }} />;
};

ThemeHydrationScriptTag.propTypes = {
  storageKey: PropTypes.string,
};

ThemeHydrationScriptTag.defaultProps = {
  storageKey: 'dark',
};

exports.onRenderBody = ({ setPreBodyComponents }) =>
  setPreBodyComponents([<ThemeHydrationScriptTag key="use-dark-mode" />]);
