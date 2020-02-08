import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  routeNumber: PropTypes.number.isRequired,
};

const Route = (props) => {
  const { routeNumber } = props;

  return (
    <div>
      {`Route ${routeNumber}`}
    </div>
  );
};

Route.propTypes = propTypes;

export default Route;
