import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Section = styled('section')`
  display: flex;
  align-items: center;
  min-height: 80vh;
  background: ${p =>
    p.secondary
      ? p.theme.backgroundSecondary
      : p.tertiary
      ? p.theme.backgroundTertiary
      : p.theme.backgroundPrimary};
  clip-path: ${p =>
    p.secondary ? 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' : 'none'};
`;

Section.propTypes = {
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

Section.defaultProps = {
  secondary: false,
  tertiary: false,
};

export default Section;
