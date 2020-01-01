import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.6,
  blockMarginBottom: 0.75,
  bodyFontFamily: ['Nunito', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  scaleRatio: 1.6,
});

export const { rhythm } = typography;
export default typography;
