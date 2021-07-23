import React from 'react';
import { AvatarBg, AvatarImage } from './styles';
import GlobalStyle from '../../global/styles/themes';

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = GlobalStyle.colors;

  return (
    <AvatarBg colors={[secondary50, secondary70]}>
      <AvatarImage source={{ uri: urlImage }} />
    </AvatarBg>
  );
}
