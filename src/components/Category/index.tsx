import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import {
  Container,
  GradientBg,
  Content,
  Checked,
  Check,
  Title,
} from './styles';
import GlobalStyle from '../../global/styles/themes';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = GlobalStyle.colors;

  return (
    <Container {...rest}>
      <GradientBg colors={[secondary50, secondary70]}>
        <Content checked={checked}>
          {checked ? <Checked /> : <Check />}
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </Content>
      </GradientBg>
    </Container>
  );
}
