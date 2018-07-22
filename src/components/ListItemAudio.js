import React from 'react';
import styled from 'styled-components';

const StyledListItemAudioWrapper = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  left: 1.5rem;
`;

const StyledAudio = styled.audio`
  display: block;
  width: 100%;
  margin: 0;
`;

export default class ListItemAudio extends React.PureComponent {
  render() {
    const { streamUrl } = this.props;

    return (
      <StyledListItemAudioWrapper>
        <StyledAudio controls>
          <source src={streamUrl} type="audio/mp3" />
        </StyledAudio>
      </StyledListItemAudioWrapper>
    );
  }
}
