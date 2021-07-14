import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    color: theme.colors.heading,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 48,
    color: theme.colors.heading,
  },
})