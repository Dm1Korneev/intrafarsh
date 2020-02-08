import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'Components/Header';
import UserBlock from './UserBlock';
import PostStatystics from './PostStatystics';
import MainInfo from './MainInfo';

import { Container, Container2, ContainerMain } from './PlacePage.styled';

const propTypes = {
  /* eslint-disable-next-line react/forbid-prop-types */
  history: PropTypes.any.isRequired,
};

const PlacePage = ({ history }) => (
  <Container>
    <Header backAction={() => history.push('/route/664139')} />
    <UserBlock
      title="Jane Shvetsova"
      place="Moscow"
      url="https://intrafarsh.blob.core.windows.net/resources/JaneShvetsova.jpg"
    />
    <Container2>
      <PostStatystics
        followers="184K"
        viewed="321K"
      />
      <ContainerMain>
        <MainInfo />
      </ContainerMain>
    </Container2>
  </Container>
);

PlacePage.propTypes = propTypes;

export default withRouter(PlacePage);
