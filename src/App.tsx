import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './navigations/RootNavigator';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
