import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20x',
  baseLineHeight: 1.6,
  blockMarginBottom: 0.75,
  bodyFontFamily: ['Helvetica', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ['Helvetica', 'sans-serif'],
  headerWeight: 700,
  scaleRatio: 1.6,
});

export const { rhythm } = typography;
export default typography;
