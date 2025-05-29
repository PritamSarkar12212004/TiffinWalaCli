import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../../screen/main/DashboardScreen';
import MainWraper from '../../layout/wraper/MainWraper';
import ProfileScreen from '../../screen/main/ProfileScreen';
import PersonalInfo from '../../screen/main/page/Profile/PersonalInfo';
import ProfileEdit from '../../screen/main/page/Profile/ProfileEdit';
import LocationScree from '../../screen/main/location/LocationScree';
import ShowmMainProductScreen from '../../screen/main/page/product/ShowmMainProductScreen';

const Stack = createNativeStackNavigator();
const Mainnavigation = () => {
    return (
        <MainWraper>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ShowmMainProductScreen'>
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
                <Stack.Screen name="LocationScree" options={{
                    animation: 'slide_from_bottom'
                }} component={LocationScree} />
                <Stack.Screen name="ShowmMainProductScreen" options={{
                    animation: 'slide_from_bottom'
                }} component={ShowmMainProductScreen} />
            </Stack.Navigator>
        </MainWraper>
    )
}

export default Mainnavigation