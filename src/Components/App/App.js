import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route as RouteFromRouter, HashRouter as Router, Switch } from 'react-router-dom';

import RoutesPage from 'Components/RoutesPage';
import RoutePage from 'Components/RoutePage';
import PlacePage from 'Components/PlacePage';
import Navigation from 'Components/Navigation';

const propTypes = {
  appStart: PropTypes.func.isRequired,
};

const App = (props) => {
  const { appStart } = props;

  useEffect(() => {
    appStart();
  }, [appStart]);

  return (
    <Router>
      <Switch>
        <RouteFromRouter path="/routes">
          <RoutesPage />
        </RouteFromRouter>
        <RouteFromRouter path="/route">
          <RoutePage />
        </RouteFromRouter>
        <RouteFromRouter path="/place">
          <PlacePage />
        </RouteFromRouter>
        <RouteFromRouter path="/">
          <Navigation />
        </RouteFromRouter>
      </Switch>
    </Router>
  );
};

App.propTypes = propTypes;

export default App;
