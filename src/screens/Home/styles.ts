import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const IPHONE_X_HEIGHT = getStatusBarHeight();

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0px 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${IPHONE_X_HEIGHT + 26}px;
  margin-bottom: 42px;
`;

export const Categories = styled.View``;

export const Title = styled.Text`
  color: ${(p) => p.theme.colors.heading};
  font-family: ${(p) => p.theme.fonts.title700};
  font-size: 18px;
  margin: 0px 0px 12px 24px;
`;
