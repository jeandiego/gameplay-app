import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SignInView from './view';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return <SignInView handleSignIn={handleSignIn} />;
}

export default SignIn;
