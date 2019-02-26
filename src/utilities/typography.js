/* eslint-disable sort-keys */

import Typography from 'typography';
import breakpoints from './breakpoints';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 3,
  blockMarginBottom: 0.75,
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: () => ({
    html: { fontSize: '4.6vw' },
    [`@media (min-width: ${breakpoints.sm})`]: {
      html: { fontSize: '3.2vw' },
    },
    [`@media (min-width: ${breakpoints.md})`]: {
      html: { fontSize: '3vw' },
    },
    [`@media (min-width: ${breakpoints.lg})`]: {
      html: { fontSize: '30px' },
    },
  }),
});

export const { rhythm } = typography;
export default typography;
