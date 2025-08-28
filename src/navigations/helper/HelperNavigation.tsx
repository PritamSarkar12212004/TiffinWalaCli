import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorScreen from '../../screen/helper/ErrorScreen';
import { RootStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();


const HelperNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="ErrorScreen" options={{
                animation: 'slide_from_right'
            }} component={ErrorScreen} />

        </Stack.Navigator>
    )
}

export default HelperNavigation