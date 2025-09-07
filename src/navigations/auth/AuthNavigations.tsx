import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screen/auth/LoginScreen';
import AuthWraper from '../../layout/wraper/AuthWraper';
import Varifypage from '../../screen/auth/Varifypage';
import { RootStackParamList } from '../../types/navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigations = () => {
  return (
    <AuthWraper>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="LoginScreen" options={{
          animation: 'fade'
        }} component={LoginScreen} />
        <Stack.Screen name="Varifypage" options={{
          animation: 'slide_from_right'
        }} component={Varifypage} />
      </Stack.Navigator>
    </AuthWraper>
  )
}

export default AuthNavigations