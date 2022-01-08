import {createSlice} from '@reduxjs/toolkit';
import TripList from './../data/trip-list.json';
import {AppDispatch, RootState} from './store';

interface TripsState {
  loading: boolean;
  tripList: object[];
}

const initialState: TripsState = {
  loading: false,
  tripList: [],
};

export const slice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setTripList: (state, action) => {
      state.tripList = action.payload;
    },
  },
});

export const {setLoader, setTripList} = slice.actions;

export const getTripList = () => (dispatch: AppDispatch) => {
  dispatch(setLoader(true));
  setTimeout(() => {
    dispatch(setTripList(TripList));
    dispatch(setLoader(false));
  }, 2000);
};

export const tripList = (state: RootState) => state.trips.tripList;
export const isLoading = (state: RootState) => state.trips.loading;

export default slice.reducer;
