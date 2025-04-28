import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/features/store';
import AppNavigator from './src/shared/navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
}
