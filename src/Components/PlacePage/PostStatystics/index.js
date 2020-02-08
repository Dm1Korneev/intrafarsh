import React from 'react';
import PropTypes from 'prop-types';

import Followers from './Followers';
import Viewed from './Viewed';

import {
  Container, Divider,
} from './PostStatystics.styled';

const propTypes = {
  followers: PropTypes.string.isRequired,
  viewed: PropTypes.string.isRequired,
};

const PostStatystics = (props) => {
  const { followers, viewed } = props;

  return (
    <Container>
      <Followers count={followers} />
      <Divider />
      <Viewed count={viewed} />
    </Container>
  );
};

PostStatystics.propTypes = propTypes;

export default PostStatystics;
