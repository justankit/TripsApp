import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from './../util/colors';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Container = ({style, children}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[styles.container, {paddingTop: insets.top}, {...(style as {})}]}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SCREEN_BACKGROUND,
    paddingHorizontal: 20,
  },
});
