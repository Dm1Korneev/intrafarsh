import React from 'react';

import { Container } from './Header.styled';
import Back from './Back';
import More from './More';

const Header = () => (
  <Container>
    <Back />
    <More />
  </Container>
);

export default Header;
