import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './BackIcon.styled.js';

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  color: '#FFF',
  onClick: () => {},
};

const Back = ({ color, onClick }) => (
  <Button onClick={onClick} type="button">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill={color} />
    </svg>
  </Button>
);

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;

export default Back;
