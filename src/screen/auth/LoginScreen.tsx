import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from '../../components/auth/textinput/PhoneInput';
import LoginButton from '../../components/auth/buttons/LoginButton';
import { useNavigation } from '@react-navigation/native';
import ImageConstant from '../../constants/image/ImageConstant';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  return (
    <View className='flex-1 flex bg-black pt-5'>
      <Image source={ImageConstant.Auth.AuthHeaderimage} className='w-full h-full absolute top-0 left-0' />
      <View className='w-full flex items-center gap-4 justify-center px-3 pt-5 pb-14 '>
        <View className='w-full h-20'></View>
        <Text className='text-3xl text-white font-bold'>
          Login In
        </Text>
        <Text className='text-white'>
          Please sign in to your existing account
        </Text>
      </View>
      <View className='flex-1 flex pb-10 items-center justify-between bg-white rounded-t-[40px] pt-10 px-5'>
        <PhoneInput setPhoneNumber={setPhoneNumber} />
        <View className='w-full flex gap-8 items-center justify-center px-5 '>
          <LoginButton />
          <View className='flex-row items-center justify-center gap-2'>
            <Text className=''>Don’t have an account?</Text> <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("SignupScreen" as never)} ><Text className='text-[#FF7622]'>Sign Up</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen;