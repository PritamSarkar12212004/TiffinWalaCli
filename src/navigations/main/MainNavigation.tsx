import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthWraper from '../../layout/authLayout/AuthWraper';
import PopUpWraper from '../../layout/PopUp/PopUpWraper';
import DashboardScreen from '../../screen/main/DashboardScreen';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
    return (
        <AuthWraper>
            <PopUpWraper>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DashboardScreen'  >
                    <Stack.Screen
                        name="DashboardScreen"
                        component={DashboardScreen}
                        options={{ headerShown: false, animation: 'fade' }}
                    />
                </Stack.Navigator>
            </PopUpWraper>
        </AuthWraper>
    );
};

export default MainNavigation;