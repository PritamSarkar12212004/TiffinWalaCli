import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorScreen from '../../screen/helper/ErrorScreen';
import { RootStackParamList } from '../../types/navigation';
import LocationWarning from '../../screen/helper/LocationWarning';

const Stack = createNativeStackNavigator<RootStackParamList>();


const HelperNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LocationWarning' >
            <Stack.Screen name="ErrorScreen" options={{
                animation: 'slide_from_right'
            }} component={ErrorScreen} />
            <Stack.Screen name="LocationWarning" options={{
                animation: 'slide_from_right'
            }} component={LocationWarning} />


        </Stack.Navigator>
    )
}

export default HelperNavigation