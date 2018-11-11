import Typography from 'typography';
import breakpoints from './breakpoints';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.6,
  scaleRatio: 2.8,
  blockMarginBottom: 0.75,
  googleFonts: [
    { name: 'Playfair Display', styles: ['700'] },
    { name: 'Fira Sans', styles: ['400', '400i', '700', '700i'] },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: () => ({
    [`@media (min-width: ${breakpoints.small})`]: {
      html: { fontSize: '3.6vw' },
    },
    [`@media (min-width: ${breakpoints.medium})`]: {
      html: { fontSize: '3vw' },
    },
    [`@media (min-width: ${breakpoints.large})`]: {
      html: { fontSize: '30px' },
    },
  }),
});

export const rhythm = typography.rhythm;
export default typography;
