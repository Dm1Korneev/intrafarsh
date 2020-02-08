import React from 'react';

import CommentsComponent from 'Components/Comments';
import LikesComponent from 'Components/Likes';

import Video from './Video';
import Photos from './Photos';

const MainInfo = () => (
  <>
    <Video />
    <Photos />

    <CommentsComponent count={320} />
    <LikesComponent count={600} />
  </>
);

export default MainInfo;
