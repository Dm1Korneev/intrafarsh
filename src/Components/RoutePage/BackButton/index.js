import React from 'react';
import { Link } from 'react-router-dom';

import BackIcon from 'Components/BackIcon';

import { Button } from './BackButton.styled';

const BackButton = () => (
  <Link to="/routes">
    <Button>
      <BackIcon color="#000" />
    </Button>
  </Link>
);

export default BackButton;
