import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileWrapper = styled.View`
  margin-left: 20px;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${(p) => p.theme.fonts.title500};
  color: ${(p) => p.theme.colors.heading};
  font-size: 24px;
  margin-right: 2px;
  line-height: 31px;
  margin-bottom: 2px;
`;

export const Username = styled.Text`
  font-family: ${(p) => p.theme.fonts.title700};
  color: ${(p) => p.theme.colors.heading};
  font-size: 24px;
`;

export const Message = styled.Text`
  font-family: ${(p) => p.theme.fonts.text400};
  color: ${(p) => p.theme.colors.highlight};
  font-size: 14px;
  line-height: 17px;
`;
