import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle, TextProps} from 'react-native';
import Fonts from '../util/Fonts';

type Props = TextProps & {
  children: string;
  style: StyleProp<TextStyle>;
  type?: 'regular' | 'bold';
};

const FreelyText = ({children, type, style, ...props}: Props) => {
  let textStyle;
  switch (type) {
    case 'bold':
      textStyle = styles.bold;
      break;
    default:
      textStyle = styles.regular;
      break;
  }

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Text {...props} style={[textStyle, {...passedStyles}]}>
      {children}
    </Text>
  );
};

export default FreelyText;

const styles = StyleSheet.create({
  regular: {
    fontFamily: Fonts.regular,
  },
  bold: {
    fontFamily: Fonts.bold,
  },
});
