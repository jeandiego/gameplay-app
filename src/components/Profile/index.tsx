import React from 'react';
import { Avatar } from '../Avatar';
import {
  Container,
  ProfileWrapper,
  User,
  Greeting,
  Username,
  Message,
} from './styles';

export function Profile() {
  const ProfilePic = 'https://github.com/jeandiego.png';

  return (
    <Container>
      <Avatar urlImage={ProfilePic} />
      <ProfileWrapper>
        <User>
          <Greeting>Ola, </Greeting>
          <Username>Jean Diego</Username>
        </User>
        <Message>Hoje e dia de vitoria</Message>
      </ProfileWrapper>
    </Container>
  );
}
