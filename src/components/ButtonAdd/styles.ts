import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: 48px;
  width: 48px;
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
