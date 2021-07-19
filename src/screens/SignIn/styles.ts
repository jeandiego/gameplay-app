import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderImg = styled.Image`
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 50px 0px;
`;

export const Title = styled.Text`
  font-family: ${(p) => p.theme.fonts.title700};
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 16px;
  color: ${(p) => p.theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-family: ${(p) => p.theme.fonts.text400};
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 48px;
  color: ${(p) => p.theme.colors.heading};
`;
