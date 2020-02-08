import React from 'react';

import Header from 'Components/Header';
import UserBlock from './UserBlock';
import PostStatystics from './PostStatystics';
import MainInfo from './MainInfo';

import { Container, Container2, ContainerMain } from './PlacePage.styled';

const PlacePage = () => (
  <Container>
    <Header />
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

export default PlacePage;
