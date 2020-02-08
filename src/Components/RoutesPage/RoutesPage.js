import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Route from 'Components/Route';
import Header from 'Components/Header';

import { Container, RoutesContainer } from './RoutesPage.styled';

const propTypes = {
  getRoutes: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const RoutePage = (props) => {
  const { getRoutes, routes } = props;

  useEffect(() => {
    getRoutes();
  }, [getRoutes]);

  return (
    <Container>
      <Header />
      <RoutesContainer>
        {routes.map((route) => {
          const routeProps = {
            routeID: route.RouteID,
            routerName: route.RouterName,
            imageUrl: route.ImageUrl,
          };

          return (<Route key={route.RouteID} {...routeProps} />);
        })}
      </RoutesContainer>
    </Container>
  );
};

RoutePage.propTypes = propTypes;

export default RoutePage;
