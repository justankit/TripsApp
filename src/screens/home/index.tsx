import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Container from '../../components/Container';

const Home = () => {
  return (
    <Container style={styles.container}>
      <Text style={styles.home}>Home</Text>
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
