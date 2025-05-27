import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../../screen/main/DashboardScreen';

const Stack = createNativeStackNavigator();


const Mainnavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DashboardScreen'>
            <Stack.Screen name="DashboardScreen" options={{
                animation: 'slide_from_right'
            }} component={DashboardScreen} />


        </Stack.Navigator>
    )
}

export default Mainnavigation