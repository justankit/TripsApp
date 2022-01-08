import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import Container from '../../components/Container';
import TripItem from '../../components/TripItem';
import TripList from './../../data/trip-list.json';

interface TripItemProps {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
}

const Trips = ({navigation}) => {
  const onPressTripItem = (item: TripItemProps) => {
    navigation.navigate('TripDetails', {tripDetails: item});
  };

  const renderItem: ListRenderItem<TripItemProps> = ({item}) => {
    return (
      <TripItem
        item={item}
        name={item.name}
        startDate={item.startDate}
        endDate={item.endDate}
        status={item.status}
        onPress={onPressTripItem}
      />
    );
  };

  const keyExtractor = (item: TripItemProps) => item.id.toString();

  return (
    <Container>
      <FlatList
        data={TripList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20}}
      />
    </Container>
  );
};

export default Trips;
