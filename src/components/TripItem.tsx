import React, {useRef, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, AppState} from 'react-native';
import colors from '../util/colors';
import FreelyText from './FreelyText';

interface itemProps {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface Props {
  item: itemProps;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  onPress: (item: itemProps) => void;
}

const TripItem = ({item, name, startDate, endDate, status, onPress}: Props) => {
  const appState = useRef(AppState.currentState);
  const [bgColor, setBgColor] = useState(colors.TRIP_CARD_BACKGROUND);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        status === 'NOT_STARTED' &&
          setBgColor(colors.TRIP_CARD_BACKGROUND_HIGHLIGHTED);
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={[styles.tripItem, {backgroundColor: bgColor}]}>
        <FreelyText type="bold" style={styles.name}>
          {name}
        </FreelyText>
        <View style={styles.dateRow}>
          <FreelyText style={styles.date}>{startDate}</FreelyText>
          <FreelyText style={styles.date}>{endDate}</FreelyText>
        </View>
        <FreelyText style={styles.status}>
          {status.replace(/_/g, ' ')}
        </FreelyText>
      </View>
    </TouchableOpacity>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  tripItem: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    // backgroundColor: colors.TRIP_CARD_BACKGROUND,
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
