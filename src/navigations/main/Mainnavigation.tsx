import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../../screen/main/DashboardScreen';
import MainWraper from '../../layout/wraper/MainWraper';
import ProfileScreen from '../../screen/main/ProfileScreen';

const Stack = createNativeStackNavigator();


const Mainnavigation = () => {
    return (
        <MainWraper>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ProfileScreen'>
                <Stack.Screen name="DashboardScreen" options={{
                    animation: 'slide_from_right'
                }} component={DashboardScreen} />
                <Stack.Screen name="ProfileScreen" options={{
                    animation: 'slide_from_right'
                }} component={ProfileScreen} />
            </Stack.Navigator>
        </MainWraper>
    )
}

export default Mainnavigation