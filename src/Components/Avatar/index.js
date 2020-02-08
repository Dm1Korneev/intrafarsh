import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './Avatar.styled';

const propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Avatar = (props) => {
  const { url, name } = props;

  return (<Image src={url} alt={`Avatar of ${name}`} />);
};

Avatar.propTypes = propTypes;

export default Avatar;
