import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './RouteTitle.styled';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const RouteTitle = (props) => {
  const { title } = props;

  return (<Container>{title}</Container>);
};

RouteTitle.propTypes = propTypes;

export default RouteTitle;
