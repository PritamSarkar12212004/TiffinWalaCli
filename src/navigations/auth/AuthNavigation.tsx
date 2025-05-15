import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../../screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation