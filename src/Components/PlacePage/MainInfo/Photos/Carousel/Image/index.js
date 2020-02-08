import React from 'react';

import {
  Container, Creator, Event, Img, Information, Place,
} from './Image.styled';

const Image = () => (
  <Container>
    <Img src="https://intrafarsh.blob.core.windows.net/resources/PhotoPreview.png" alt="photo1" />
    <Information>
      <Place>WINZAVOD</Place>
      <Event>EXHIBITION</Event>
      <Creator>ArtColab</Creator>
    </Information>
  </Container>
);

export default Image;
