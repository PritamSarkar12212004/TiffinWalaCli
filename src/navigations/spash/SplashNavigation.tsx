import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashOne from '../../screen/splash/SplashOne';
import SplashWraper from '../../layout/splashLayout/SplashWraper';
const Stack = createNativeStackNavigator();

const SplashNavigation = () => {
    return (
        <SplashWraper>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="SplashOne"
                    component={SplashOne}
                />
            </Stack.Navigator>
        </SplashWraper>
    );
};

export default SplashNavigation;