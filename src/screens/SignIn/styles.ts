// import { StyleSheet } from 'react-native';
// import { theme } from '../../global/styles/themes';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colors.background};
`;

export const HeaderImg = styled.Image`
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 50px 0px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  color: ${(p) => p.theme.colors.heading};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 15px;
  margin-bottom: 48px;
  color: ${(p) => p.theme.colors.heading};
`;

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: theme.colors.background,
//   },
//   image: {
//     width: '100%',
//     height: 360,
//   },
//   content: {
//     marginTop: -40,
//     paddingHorizontal: 50,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 40,
//     marginBottom: 16,
//     color: theme.colors.heading,
//   },
//   subtitle: {
//     textAlign: 'center',
//     fontSize: 15,
//     marginBottom: 48,
//     color: theme.colors.heading,
//   },
// });
