import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from './styles';
import GlobalStyle from '../../global/styles/themes';

export function ButtonAdd({ ...rest }: RectButtonProps) {
  const { heading } = GlobalStyle.colors;

  return (
    <Container {...rest}>
      <MaterialCommunityIcons name="plus" color={heading} size={24} />
    </Container>
  );
}
