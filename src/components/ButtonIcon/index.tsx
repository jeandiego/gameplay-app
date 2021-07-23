import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Icon, IconWrapper, Title } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = RectButtonProps & {
  title: string;
};

const ButtonIcon = ({ title, ...rest }: Props) => (
  <Container {...rest}>
    <IconWrapper>
      <Icon source={DiscordImg} />
    </IconWrapper>
    <Title>{title}</Title>
  </Container>
);

export default ButtonIcon;
