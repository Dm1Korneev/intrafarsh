import React from 'react';

import Play from './Play';
import AudioRecord from './AudioRecord';

import { Container, Time } from './Audio.styled';

const Audio = () => (
  <Container>
    <Play />
    <AudioRecord />
    <Time>1:24</Time>
  </Container>
);

export default Audio;
