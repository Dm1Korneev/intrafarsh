import React from 'react';

import Play from './Play';

import {
  Image, Information, PrevievContainer, Teg, Title,
} from './Video.styled';

const Video = () => (
  <PrevievContainer>
    <Image src="https://intrafarsh.blob.core.windows.net/resources/VideoPreview.png" alt="video preview" />
    <Information>
      <Teg>@winzavod</Teg>
      <Title>Exhibition All we need is ART</Title>
    </Information>
    <Play />
  </PrevievContainer>
);

export default Video;
