import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import TripItem from '../../components/TripItem';
import {getTripList, isLoading, tripList} from '../../store/tripListSlicer';
import {useAppDispatch, useAppSelector} from '../hooks';

import analytics from '@react-native-firebase/analytics';

interface TripItemProps {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
}

const Trips = () => {
  const navigation = useNavigation();
  const tripListData = useAppSelector(tripList);
  const tripLoading = useAppSelector(isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTripList());
  }, []);

  const onPressTripItem = async (item: TripItemProps) => {
    await analytics().logEvent('screen_view', {
      name: item.name,
    });
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
      {tripLoading ? (
        <Loader modalVisible={tripLoading} />
      ) : (
        <FlatList
          data={tripListData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 20}}
        />
      )}
    </Container>
  );
};

export default Trips;
