import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import FreelyText from '../../components/FreelyText';

const Home = () => {
  return (
    <Container style={styles.container}>
      <FreelyText style={styles.home}>Home</FreelyText>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    fontSize: 20,
  },
});
