import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import FreelyText from '../../components/FreelyText';
import colors from '../../util/colors';

const TripDetails = () => {
  const {params} = useRoute();
  const {tripDetails} = params;
  return (
    <Container>
      <FreelyText style={styles.name}>{tripDetails.name}</FreelyText>
      <FreelyText style={styles.destination}>
        {tripDetails?.destinations?.join('\n')}
      </FreelyText>
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
