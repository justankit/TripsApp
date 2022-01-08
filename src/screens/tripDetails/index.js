import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import colors from '../../util/colors';

const TripDetails = () => {
  const {params} = useRoute();
  const {tripDetails} = params;
  return (
    <Container>
      <Text style={styles.name}>{tripDetails.name}</Text>
      <Text style={styles.destination}>
        {tripDetails?.destinations?.join('\n')}
      </Text>
    </Container>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.TEXT,
  },
  destination: {
    fontSize: 12,
    color: colors.TEXT,
    marginBottom: 10,
    lineHeight: 20,
  },
});
