import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';

import { default as Store } from './app/redux/store';
import { default as MainRoute } from './app/navigation';

const RNComponent = () => {
  return (
    <Provider store={Store}>
      <MainRoute />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNComponent);
