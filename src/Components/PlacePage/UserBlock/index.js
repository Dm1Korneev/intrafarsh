import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Image, Place, Title, TitlesContainer,
} from './UserBlock.styled';

const propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const UserBlock = (props) => {
  const { title, place, url } = props;

  return (
    <Container>
      <Image src={url} />
      <TitlesContainer>
        <Title>{title}</Title>
        <Place>{place}</Place>
      </TitlesContainer>
    </Container>
  );
};

UserBlock.propTypes = propTypes;

export default UserBlock;
