import React from 'react';

import CommentsComponent from 'Components/Comments';
import LikesComponent from 'Components/Likes';

import { Statistics } from './MainInfo.styled';

import Video from './Video';
import Photos from './Photos';
import Details from './Details';
import Hashtags from './Hashtags';
import Comments from './Comments';

const MainInfo = () => (
  <>
    <Video />
    <Photos />
    <Hashtags />
    <Details />

    <Statistics>
      <CommentsComponent count={320} />
      <LikesComponent count={600} />
    </Statistics>
    <Comments />
  </>
);

export default MainInfo;
