import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screen/auth/LoginScreen';
import AuthNotificationWraper from '../../layouts/AuthNotificationWraper';
import SignupScreen from '../../screen/auth/SignupScreen';
const Stack = createNativeStackNavigator();

const AuthNavigations = () => {
    return (
        <AuthNotificationWraper>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name="SignupScreen"
                        component={SignupScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthNotificationWraper>
    );
};

export default AuthNavigations;