import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Avatar from 'Components/Avatar';
import RouteTitle from './RouteTitle';
import CommentsComponent from './Comments';
import LikesComponent from './Likes';

import {
  AvatarContainer, Container, HeaderContainer, OuterContainer, RouteImageContainer, RouteTitleContainer, UserTitle,
} from './Route.styled';

const propTypes = {
  RouterName: PropTypes.string.isRequired,
  RouteID: PropTypes.number.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  User: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Photo: PropTypes.string.isRequired,
  }).isRequired,
  Count: PropTypes.shape({
    Comments: PropTypes.number.isRequired,
    Likes: PropTypes.number.isRequired,
  }).isRequired,
};

const Route = (props) => {
  const {
    RouterName, RouteID, ImageUrl, User, Count,
  } = props;

  const { Name, Photo } = User;
  const { Comments, Likes } = Count;

  return (
    <OuterContainer>
      <Link to={`/route/${RouteID}`}>
        <HeaderContainer>
          <UserTitle>{Name}</UserTitle>
          <CommentsComponent count={Comments} />
          <LikesComponent count={Likes} />
        </HeaderContainer>
        <Container>
          <RouteImageContainer url={ImageUrl} />
          <RouteTitleContainer>
            <RouteTitle title={RouterName} />
          </RouteTitleContainer>
          <AvatarContainer>
            <Avatar url={Photo} name={Name} />
          </AvatarContainer>
        </Container>
      </Link>
    </OuterContainer>
  );
};

Route.propTypes = propTypes;

export default Route;
