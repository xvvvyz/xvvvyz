import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled('section')`
  display: flex;
  align-items: center;
  min-height: 82vh;
  background: ${p => {
    if (p.secondary) return p.theme.backgroundSecondary;
    if (p.tertiary) return p.theme.backgroundTertiary;
    return p.theme.backgroundPrimary;
  }};
  clip-path: ${p =>
    p.secondary ? 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)' : 'none'};
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
