import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash1 from '../../screen/splash/Splash1';
import Splash2 from '../../screen/splash/Splash2';
import Wraper from '../../layout/wraper/Wraper';
import Splash3 from '../../screen/splash/Splash3';
import { RootStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const SplashNavigation = () => {
  return (
    <Wraper>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash1' >
        <Stack.Screen name="Splash1" options={{
          animation: 'slide_from_right'
        }} component={Splash1} />
        <Stack.Screen options={{
          animation: 'slide_from_right'
        }} name="Splash2" component={Splash2} />
        <Stack.Screen options={{
          animation: 'slide_from_right'
        }} name="Splash3" component={Splash3} />
      </Stack.Navigator>
    </Wraper>
  )
}

export default SplashNavigation