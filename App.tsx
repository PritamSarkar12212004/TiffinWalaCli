import './global.css';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigations from './src/navigations/auth/AuthNavigations';
import SplashNavigation from './src/navigations/spash/SplashNavigation';
import { getSplashTokenFun } from './src/functions/token/SpashTokenHandlear';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const authSplash = getSplashTokenFun();
    if (JSON.parse(authSplash)) {
      setInitialRoute('Auth');
      setLoading(false);
    } else {
      setInitialRoute('Splash');
      setLoading(false);
    }
  }, []);

  return (
    loading ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome to the App!</Text>
        <Text>Loading...</Text>
      </View>
    ) : (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
          <Stack.Screen name="Auth" component={AuthNavigations} />
          <Stack.Screen name="Splash" component={SplashNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
