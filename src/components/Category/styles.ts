import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)``;

export const GradientBg = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled.View`
  width: 100px;
  height: 116px;
  background: ${(p) => p.theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
  opacity: ${(p) => (p.checked ? 1 : 0.4)};
`;

export const Title = styled.Text`
  font-family: ${(p) => p.theme.fonts.title500};
  color: ${(p) => p.theme.colors.heading};
  font-size: 15px;
`;

export const Check = styled.View`
  width: 12px;
  height: 12px;
  background-color: ${(p) => p.theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-color: ${(p) => p.theme.colors.secondary50};
  border-width: 1px;
  border-radius: 3px;
`;

export const Checked = styled(Check)`
  background-color: ${(p) => p.theme.colors.primary};
`;
