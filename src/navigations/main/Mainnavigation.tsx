import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../../screen/main/DashboardScreen';
import MainWraper from '../../layout/wraper/MainWraper';
import ProfileScreen from '../../screen/main/ProfileScreen';
import PersonalInfo from '../../screen/main/page/Profile/PersonalInfo';
import ProfileEdit from '../../screen/main/page/Profile/ProfileEdit';
import LocationScree from '../../screen/main/location/LocationScree';
import ShowmMainProductScreen from '../../screen/main/page/product/ShowmMainProductScreen';
import SearchScreen from '../../screen/main/page/search/SearchScreen';
import FeviroteProductScreen from '../../screen/main/page/Profile/FeviroteProductScreen';
import Faqs from '../../screen/main/page/Profile/Faqs';
import RewardedAdd from '../../screen/main/page/add/RewardedAdd';

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
                <Stack.Screen name="LocationScree" options={{
                    animation: 'slide_from_bottom'
                }} component={LocationScree} />
                <Stack.Screen name="ShowmMainProductScreen" options={{
                    animation: 'slide_from_right'
                }} component={ShowmMainProductScreen} />
                <Stack.Screen name="SearchScreen" options={{
                    animation: 'slide_from_right'
                }} component={SearchScreen} />
                <Stack.Screen name="FeviroteProductScreen" options={{
                    animation: 'slide_from_right'
                }} component={FeviroteProductScreen} />
                <Stack.Screen name="Faqs" options={{
                    animation: 'slide_from_right'
                }} component={Faqs} />
                <Stack.Screen name="RewardedAdd" options={{
                    animation: 'slide_from_right'
                }} component={RewardedAdd} />
            </Stack.Navigator>
        </MainWraper>
    )
}

export default Mainnavigation