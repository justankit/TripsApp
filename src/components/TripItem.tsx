import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../util/colors';

interface Props {
  name: string;
  startDate: string;
  endDate: string;
  status: string;
}

const TripItem = ({name, startDate, endDate, status}: Props) => {
  return (
    <View style={styles.tripItem}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.dateRow}>
        <Text style={styles.date}>{startDate}</Text>
        <Text style={styles.date}>{endDate}</Text>
      </View>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  tripItem: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    backgroundColor: colors.TRIP_CARD_BACKGROUND,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  status: {
    textAlign: 'right',
    fontSize: 12,
    color: colors.TEXT,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.TEXT,
  },
  date: {
    fontSize: 16,
    color: colors.TEXT,
  },
});
