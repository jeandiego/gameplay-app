import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, IconWrapper, Title } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
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
