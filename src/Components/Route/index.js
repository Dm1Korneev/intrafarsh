import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Avatar from 'Components/Avatar';

import { Container } from './Route.styled';

const propTypes = {
  routerName: PropTypes.string.isRequired,
  routeID: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Route = (props) => {
  const { routerName, routeID, imageUrl } = props;

  return (
    <Link to={`/route/${routeID}`}>
      <Container>
        {`routerName: ${routerName}`}
        {`routeID: ${routeID}`}
        <Avatar url={imageUrl} name={routerName} />
      </Container>
    </Link>
  );
};

Route.propTypes = propTypes;

export default Route;
