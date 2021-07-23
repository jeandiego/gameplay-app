import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: 56px;
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${(p) => p.theme.colors.line};
`;

export const Icon = styled.Image`
  height: 18px;
  width: 24px;
`;

export const Title = styled.Text`
  font-family: ${(p) => p.theme.fonts.text500};
  font-size: 15px;
  text-align: center;
  flex: 1;
  color: ${(p) => p.theme.colors.heading};
`;
