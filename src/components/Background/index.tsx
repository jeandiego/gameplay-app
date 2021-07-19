import React, { ReactNode } from 'react';
import GlobalStyle from '../../global/styles/themes';
import { GlobalBackground } from './styles';

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = GlobalStyle.colors;

  return (
    <GlobalBackground colors={[secondary80, secondary100]}>
      {children}
    </GlobalBackground>
  );
}
