import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Avatar from 'Components/Avatar';
import RouteTitle from './RouteTitle';

import {
  AvatarContainer, Container, OuterContainer, RouteImageContainer, RouteTitleContainer,
} from './Route.styled';

const propTypes = {
  routerName: PropTypes.string.isRequired,
  routeID: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const Route = (props) => {
  const { routerName, routeID, imageUrl } = props;

  return (
    <OuterContainer>
      <Link to={`/route/${routeID}`}>
        <Container>
          <RouteImageContainer>
            <img src={imageUrl} alt={routerName} />
          </RouteImageContainer>
          <RouteTitleContainer>
            <RouteTitle title={routerName} />
          </RouteTitleContainer>
          <AvatarContainer>
            <Avatar url={imageUrl} name={routerName} />
          </AvatarContainer>
        </Container>
      </Link>
    </OuterContainer>
  );
};

Route.propTypes = propTypes;

export default Route;
