import './global.css';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashNavigation from './src/navigations/splashNav/SplashNavigation';
import AuthNavigations from './src/navigations/auth/AuthNavigations';
import { Text, View } from 'react-native';
import AnimationPath from './src/constants/animation/AnimationPath';
import AnimationLotti from './src/components/global/animation/AnimationLotti';
import { getSplashToken } from './src/functions/Token/PageTokenManagerFun';
import PageToken from './src/constants/tokens/PageToken';
import ProfileSetupnav from './src/navigations/profileSetup/ProfileSetupnav';


const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState<string>('AuthNavigations');

  const tokenFinder = () => {
    // getSplashToken(PageToken.SplashToken) ? setInitialRoute('AuthNavigations') : setInitialRoute('Splash');
  }
  useEffect(() => {
    // tokenFinder()
  }, [])



  return (
    initialRoute === '' ? <View className='flex-1 bg-white flex items-center justify-center'>
      <AnimationLotti
        height={200}
        width={350}
        path={AnimationPath.SplashLoading}
        bg={'#fff'}
      />
      <Text className='text-2xl font-bold text-gray-800'>Welcome to Tiffin Wala</Text>
    </View> : <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name="Splash" component={SplashNavigation} />
        <Stack.Screen name="AuthNavigations" component={AuthNavigations} />
        <Stack.Screen name="ProfileSetupnav" component={ProfileSetupnav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
