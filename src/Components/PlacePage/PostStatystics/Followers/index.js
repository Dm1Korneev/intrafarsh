import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, SubTitle, Title, TitleContainer,
} from './Followers.styled';
import Icon from './Icon';

const propTypes = {
  count: PropTypes.number.isRequired,
};

const Followers = (props) => {
  const { count } = props;

  return (
    <Container>
      <Icon />
      <TitleContainer>
        <Title>{count}</Title>
        <SubTitle>Followers</SubTitle>
      </TitleContainer>
    </Container>
  );
};

Followers.propTypes = propTypes;

export default Followers;
