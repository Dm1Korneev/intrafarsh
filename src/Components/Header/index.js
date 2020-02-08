import React from 'react';
import PropTypes from 'prop-types';

import BackIcon from 'Components/BackIcon';

import { Container } from './Header.styled';
import More from './More';

const propTypes = {
  backAction: PropTypes.func.isRequired,
};

const Header = ({ backAction }) => (
  <Container>
    <BackIcon onClick={backAction} />
    <More />
  </Container>
);

Header.propTypes = propTypes;

export default Header;
