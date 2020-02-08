import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -22px;
`;

const Play = () => (
  <Container>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path fillRule="evenodd" clipRule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="white" fillOpacity="0.6" />
      {/* eslint-disable-next-line max-len */}
      <path transform="translate(16 12)" fillRule="evenodd" clipRule="evenodd" d="M0 19.0016V1.00164C0 0.21047 0.875246 -0.267372 1.54076 0.160457L15.5408 9.16046C16.1531 9.55409 16.1531 10.4492 15.5408 10.8428L1.54076 19.8428C0.875246 20.2706 0 19.7928 0 19.0016Z" fill="#192038" />
    </svg>
  </Container>
);

export default Play;
