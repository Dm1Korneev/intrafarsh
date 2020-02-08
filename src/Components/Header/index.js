import React from 'react';

import BackIcon from 'Components/BackIcon';

import { Container } from './Header.styled';
import More from './More';

const Header = () => (
  <Container>
    <BackIcon />
    <More />
  </Container>
);

export default Header;
