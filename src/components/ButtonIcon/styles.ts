import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
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
  flex: 1;
  color: ${(p) => p.theme.colors.heading};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
