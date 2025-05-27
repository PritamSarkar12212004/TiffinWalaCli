import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screen/auth/LoginScreen';
import AuthWraper from '../../layout/wraper/AuthWraper';
import SignupScreen from '../../screen/auth/SignupScreen';
import Varifypage from '../../screen/auth/Varifypage';
const Stack = createNativeStackNavigator();


const AuthNavigations = () => {
  return (
    <AuthWraper>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="LoginScreen" options={{
          animation: 'slide_from_right'
        }} component={LoginScreen} />
        <Stack.Screen name="SignupScreen" options={{
          animation: 'slide_from_right'
        }} component={SignupScreen} />
        <Stack.Screen name="Varifypage" options={{
          animation: 'slide_from_right'
        }} component={Varifypage} />
      </Stack.Navigator>
    </AuthWraper>
  )
}

export default AuthNavigations