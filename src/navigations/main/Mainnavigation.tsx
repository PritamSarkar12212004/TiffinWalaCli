import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../../screen/main/DashboardScreen';
import MainWraper from '../../layout/wraper/MainWraper';

const Stack = createNativeStackNavigator();


const Mainnavigation = () => {
    return (
        <MainWraper>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DashboardScreen'>
                <Stack.Screen name="DashboardScreen" options={{
                    animation: 'slide_from_right'
                }} component={DashboardScreen} />
            </Stack.Navigator>
        </MainWraper>
    )
}

export default Mainnavigation