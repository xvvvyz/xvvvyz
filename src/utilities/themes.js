import { invert, lighten, transparentize } from 'polished';

const black = '#000';
const blackLight = transparentize(0.1, black);
const offBlack = '#24252a';
const orange = '#FFC371';
const orangeInvert = invert(orange);
const orangeInvertLight = lighten(0.1, orangeInvert);
const pink = '#FF5F6D';
const pinkInvert = invert(pink);
const pinkInvertLight = lighten(0.1, pinkInvert);
const white = '#fff';
const whiteDark = transparentize(0.1, white);

export default {
  dark: {
    accentPrimary: pink,
    accentSecondary: orange,
    backgroundPrimary: offBlack,
    backgroundSecondary: `linear-gradient(to right, ${pink}, ${orange})`,
    textBodyPrimary: whiteDark,
    textHeaderPrimary: white,
  },
  light: {
    accentPrimary: pinkInvert,
    accentSecondary: orangeInvert,
    backgroundPrimary: white,
    backgroundSecondary: `linear-gradient(to right, ${pinkInvertLight}, ${orangeInvertLight})`,
    textBodyPrimary: blackLight,
    textHeaderPrimary: black,
  },
};
