import { darken, invert, lighten, transparentize } from 'polished';

const black = '#000';
const blackTransparent = transparentize(0.1, black);
const offBlack = '#24252a';
const offBlackDark = darken(0.025, offBlack);
const orange = '#FFC371';
const orangeInvert = lighten(0.3, invert(orange));
const orangeInvertLight = lighten(0.1, orangeInvert);
const pink = '#FF5F6D';
const pinkInvert = lighten(0.3, invert(pink));
const pinkInvertLight = lighten(0.1, pinkInvert);
const white = '#fff';
const whiteTransparent = transparentize(0.1, white);
const whiteDark = darken(0.025, white);

export default {
  dark: {
    accentPrimary: pink,
    accentSecondary: orange,
    backgroundPrimary: offBlack,
    backgroundSecondary: `linear-gradient(to right, ${pink}, ${orange})`,
    backgroundTertiary: offBlackDark,
    textBodyPrimary: whiteTransparent,
    textHeaderPrimary: white,
  },
  light: {
    accentPrimary: pinkInvert,
    accentSecondary: orangeInvert,
    backgroundPrimary: white,
    backgroundSecondary: `linear-gradient(to right, ${pinkInvertLight}, ${orangeInvertLight})`,
    backgroundTertiary: whiteDark,
    textBodyPrimary: blackTransparent,
    textHeaderPrimary: black,
  },
};
