import React from 'react';

import Route from 'Components/Route';

const RoutePage = () => {
  const routes = [1, 2, 3, 4, 5];

  return (
    <>
      {routes.map((routeNumber) => (<Route routeNumber={routeNumber} />))}
    </>
  );
};

export default RoutePage;
