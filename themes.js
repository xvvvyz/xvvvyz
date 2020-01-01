const { darken, invert, lighten, transparentize } = require('polished');

const offBlack = '#24252a';
const offBlackTransparent = transparentize(0.1, offBlack);
const offBlackDark = darken(0.025, offBlack);
const orange = '#FFC371';
const orangeInvert = lighten(0.3, invert(orange));
const orangeInvertLight = lighten(0.1, orangeInvert);
const pink = '#FF5F6D';
const pinkInvert = lighten(0.3, invert(pink));
const pinkInvertLight = lighten(0.1, pinkInvert);
const offWhite = '#fefefe';
const whiteTransparent = transparentize(0.1, offWhite);
const whiteDark = darken(0.025, offWhite);

module.exports = {
  dark: {
    accentPrimary: pink,
    accentSecondary: orange,
    backgroundPrimary: offBlackDark,
    backgroundSecondary: `linear-gradient(to right, ${pink}, ${orange})`,
    backgroundTertiary: offBlack,
    textBodyPrimary: whiteTransparent,
    textHeaderPrimary: offWhite,
  },
  light: {
    accentPrimary: pinkInvert,
    accentSecondary: orangeInvert,
    backgroundPrimary: offWhite,
    backgroundSecondary: `linear-gradient(to right, ${pinkInvertLight}, ${orangeInvertLight})`,
    backgroundTertiary: whiteDark,
    textBodyPrimary: offBlackTransparent,
    textHeaderPrimary: offBlack,
  },
};
