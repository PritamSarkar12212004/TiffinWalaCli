import './global.css';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigations from './src/navigations/auth/AuthNavigations';
import { Text, View } from 'react-native';
import AnimationPath from './src/constants/animation/AnimationPath';
import AnimationLotti from './src/components/global/animation/AnimationLotti';
import { getAuthToken } from './src/functions/Token/PageTokenManagerFun';
import PageToken from './src/constants/tokens/PageToken';
import ProfileSetupnav from './src/navigations/profileSetup/ProfileSetupnav';
import { ContextProvider } from './src/utils/context/ContextProvider';
import Mainnavigation from './src/navigations/main/Mainnavigation';
import HelperNavigation from './src/navigations/helper/HelperNavigation';
import mobileAds, { NativeAd, TestIds } from 'react-native-google-mobile-ads';
import useConnectivity from './src/hooks/modules/native/useConnectivity';

const Stack = createNativeStackNavigator();

const App = () => {
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { locationEnabled } = useConnectivity();

  const EmptyData = () => (
    <View className="flex-1 bg-white flex items-center justify-center">
      <AnimationLotti
        height={200}
        width={350}
        path={AnimationPath.SplashLoading}
        bg={"#fff"}
      />
      <Text className="text-2xl font-bold text-gray-800">
        Welcome to Tiffin Wala
      </Text>
    </View>
  );

  useEffect(() => {
    // token check
    const token = getAuthToken(PageToken.profile.profileToken);
    setIsLoggedIn(!!token);
    mobileAds()
      .initialize()
      .then((adapterStatuses) => {
        console.log("MobileAds initialization complete", adapterStatuses);
      });
    NativeAd.createForAdRequest(TestIds.NATIVE)
      .then(() => {
        console.log("native ad loaded");
      })
      .catch(console.error);

    setReady(true);
  }, []);

  if (!ready || locationEnabled === null) {
    return <EmptyData />;
  }

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {locationEnabled === false ? (
            <Stack.Screen
              name="HelperNavigation"
              component={HelperNavigation}
            />
          ) : isLoggedIn ? (
            <Stack.Screen name="Mainnavigation" component={Mainnavigation} />
          ) : (
            <Stack.Screen name="AuthNavigations" component={AuthNavigations} />
          )}
          <Stack.Screen name="ProfileSetupnav" component={ProfileSetupnav} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
