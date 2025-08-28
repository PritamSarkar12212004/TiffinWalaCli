import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileSetupWraper from '../../layout/wraper/ProfileSetupWraper';
import ProfileLocation from '../../screen/profileSetup/ProfileLocation';
import CreateProfile from '../../screen/profileSetup/CreateProfile';
import { RootStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();


const ProfileSetupnav = () => {
    return (
        <ProfileSetupWraper>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ProfileLocation'>
                <Stack.Screen name="ProfileLocation" options={{
                    animation: 'slide_from_right'
                }} component={ProfileLocation} />
                <Stack.Screen name="CreateProfile" options={{
                    animation: 'slide_from_right'
                }} component={CreateProfile} />

            </Stack.Navigator>
        </ProfileSetupWraper>
    )
}

export default ProfileSetupnav