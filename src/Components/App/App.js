import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route as RouteFromRouter, HashRouter as Router, Switch } from 'react-router-dom';

import RoutesPage from 'Components/RoutesPage';
import RoutePage from 'Components/RoutePage';
import PlacePage from 'Components/PlacePage';

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
        <RouteFromRouter path="/route/:routeID" component={RoutePage} />
        <RouteFromRouter path="/place/:pointID" component={PlacePage} />
        <RouteFromRouter path="/" component={RoutesPage} />
      </Switch>
    </Router>
  );
};

App.propTypes = propTypes;

export default App;
