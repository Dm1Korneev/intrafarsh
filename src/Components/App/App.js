import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route as RouteFromRouter, BrowserRouter as Router, Switch } from 'react-router-dom';

import Routes from 'Components/Routes';
import Route from 'Components/Route';
import Place from 'Components/Place';
import Navigation from 'Components/Navigation';

const propTypes = {
  appStart: PropTypes.func.isRequired,
};

function App(props) {
  const { appStart } = props;

  useEffect(() => {
    appStart();
  }, [appStart]);

  return (
    <Router>
      <Switch>
        <RouteFromRouter path="/routes">
          <Routes />
        </RouteFromRouter>
        <RouteFromRouter path="/route">
          <Route />
        </RouteFromRouter>
        <RouteFromRouter path="/place">
          <Place />
        </RouteFromRouter>
        <RouteFromRouter path="/">
          <Navigation />
        </RouteFromRouter>
      </Switch>
    </Router>
  );
}

App.propTypes = propTypes;

export default App;
