import React from 'react';

import Route from 'Components/Route';

import { Container } from './RoutesPage.styled';

const RoutePage = () => {
  const routes = [1, 2, 3, 4, 5];

  return (
    <Container>
      {routes.map((routeNumber) => (<Route key={routeNumber} routeNumber={routeNumber} />))}
    </Container>
  );
};

export default RoutePage;
