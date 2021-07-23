import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const AvatarBg = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 6px;
`;
