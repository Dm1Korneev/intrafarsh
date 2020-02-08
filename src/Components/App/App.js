import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';

const propTypes = {
  appStart: PropTypes.func.isRequired,
};

function App(props) {
  const { appStart } = props;

  useEffect(() => {
    appStart();
  }, [appStart]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Intrafarsh
        </p>
      </header>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
