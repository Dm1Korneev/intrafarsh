import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, SubTitle, Title, TitleContainer,
} from './Viewed.styled';
import Icon from './Icon';

const propTypes = {
  count: PropTypes.number.isRequired,
};

const Viewed = (props) => {
  const { count } = props;

  return (
    <Container>
      <Icon />
      <TitleContainer>
        <Title>{count}</Title>
        <SubTitle>Viewed</SubTitle>
      </TitleContainer>
    </Container>
  );
};

Viewed.propTypes = propTypes;

export default Viewed;
