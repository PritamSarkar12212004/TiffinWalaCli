import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import AuthNavigation from './src/navigations/auth/AuthNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthNavigation />
  );
};

export default App;