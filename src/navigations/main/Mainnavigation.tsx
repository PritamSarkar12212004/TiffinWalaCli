import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../../screen/main/DashboardScreen';
import MainWraper from '../../layout/wraper/MainWraper';
import ProfileScreen from '../../screen/main/ProfileScreen';
import PersonalInfo from '../../screen/main/page/Profile/PersonalInfo';
import ProfileEdit from '../../screen/main/page/Profile/ProfileEdit';

const Stack = createNativeStackNavigator();
const Mainnavigation = () => {
    return (
        <MainWraper>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DashboardScreen'>
                <Stack.Screen name="DashboardScreen" options={{
                    animation: 'slide_from_right'
                }} component={DashboardScreen} />
                <Stack.Screen name="ProfileScreen" options={{
                    animation: 'slide_from_right'
                }} component={ProfileScreen} />
                <Stack.Screen name="PersonalInfo" options={{
                    animation: 'slide_from_right'
                }} component={PersonalInfo} />
                <Stack.Screen name="ProfileEdit" options={{
                    animation: 'slide_from_right'
                }} component={ProfileEdit} />
            </Stack.Navigator>
        </MainWraper>
    )
}

export default Mainnavigation