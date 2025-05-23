import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopUpWraper from '../../layout/PopUp/PopUpWraper';
import DashboardScreen from '../../screen/main/DashboardScreen';
import MainLayout from '../../layout/mainLayout/MainLayout';
import ProfileScreen from '../../screen/main/ProfileScreen';
import AboutScreen from '../../screen/main/AboutScreen';
import HelpSupport from '../../screen/main/HelpSupport.tsx';
import ProfileEdit from '../../screen/main/ProfileEdit.tsx';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
    return (
        <MainLayout>
            <PopUpWraper>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DashboardScreen'  >
                    <Stack.Screen
                        name="DashboardScreen"
                        component={DashboardScreen}
                        options={{ headerShown: false, animation: 'fade' }}
                    />
                    <Stack.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={{ headerShown: false, animation: 'slide_from_right' }}
                    />
                    <Stack.Screen
                        name="AboutScreen"
                        component={AboutScreen}
                        options={{ headerShown: false, animation: 'fade' }}
                    />
                    <Stack.Screen
                        name="HelpSupport"
                        component={HelpSupport}
                        options={{ headerShown: false, animation: 'fade' }}
                    />
                    <Stack.Screen
                        name="ProfileEdit"
                        component={ProfileEdit}
                        options={{ headerShown: false, animation: 'fade' }}
                    />

                </Stack.Navigator>
            </PopUpWraper>
        </MainLayout>
    );
};

export default MainNavigation;