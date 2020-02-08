import React from 'react';

import Carousel from './Carousel';
import { Container, Title } from './Photos.styled';

const Photos = () => (
  <Container>
    <Title>My photos from this place</Title>
    <Carousel />
  </Container>
);

export default Photos;
