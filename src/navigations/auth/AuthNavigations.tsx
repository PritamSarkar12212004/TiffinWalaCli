import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screen/auth/LoginScreen';
import AuthWraper from '../../layout/authLayout/AuthWraper';
import SignupScreen from '../../screen/auth/SignUpScreen';
import PopUpWraper from '../../layout/PopUp/PopUpWraper';
import UserProfileSetScreen from '../../screen/auth/UserProfileSetScreen';
const Stack = createNativeStackNavigator();

const AuthNavigations = () => {
    return (
        <AuthWraper>
            <PopUpWraper>
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
                    <Stack.Screen
                        name="UserProfileSetScreen"
                        component={UserProfileSetScreen}
                        options={{ headerShown: false, animation: 'fade' }}
                    />
                </Stack.Navigator>
            </PopUpWraper>
        </AuthWraper>
    );
};

export default AuthNavigations;