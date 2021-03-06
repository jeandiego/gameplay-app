import React from 'react';
import { Container, HeaderImg, Content, Title, Subtitle } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

type Props = {
  handleSignIn: any;
};

const SignInView = ({ handleSignIn }: Props) => (
  <Container>
    <HeaderImg source={IllustrationImg} resizeMode="stretch" />
    <Content>
      <Title>
        Conecte-se {`\n`} e organize suas {`\n`} jogatinas
      </Title>
      <Subtitle>
        Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
      </Subtitle>
      <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
    </Content>
  </Container>
);

export default SignInView;
