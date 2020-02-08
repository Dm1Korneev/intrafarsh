import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Route.styled';

const propTypes = {
  routeNumber: PropTypes.number.isRequired,
};

const Route = (props) => {
  const { routeNumber } = props;

  return (
    <Container>
      {`Route ${routeNumber}`}
    </Container>
  );
};

Route.propTypes = propTypes;

export default Route;
