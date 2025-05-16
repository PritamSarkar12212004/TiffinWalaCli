import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screen/auth/LoginScreen';
import AuthWraper from '../../layout/authLayout/AuthWraper';
import SignupScreen from '../../screen/auth/SignUpScreen';
const Stack = createNativeStackNavigator();

const AuthNavigations = () => {
    return (
        <AuthWraper>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LoginScreen'  >
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                    options={{ headerShown: false, animation: 'fade' }}

                />
            </Stack.Navigator>
        </AuthWraper>
    );
};

export default AuthNavigations;