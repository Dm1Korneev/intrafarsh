import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './Comments.styled';
import Icon from './Icon';

const propTypes = {
  count: PropTypes.number.isRequired,
};

const Comments = (props) => {
  const { count } = props;

  return (
    <Container>
      <Icon />
      <Title>{count}</Title>
    </Container>
  );
};

Comments.propTypes = propTypes;

export default Comments;
