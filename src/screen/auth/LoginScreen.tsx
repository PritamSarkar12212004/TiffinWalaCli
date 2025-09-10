import { View, Text, Image, ScrollView, Keyboard, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from '../../components/auth/textinput/PhoneInput';
import LoginButton from '../../components/auth/buttons/LoginButton';
import AuthPupup from '../../layout/popUp/AuthPupup';
import ImageConstant from '../../constants/image/ImageConstant';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [activenavigate, setActiveNavigate] = useState<boolean>(false);
  const [popUp, setPopUp] = useState({
    isVisible: false,
    message: '',
  });

  return (
    <KeyboardAvoidingView behavior='padding' className='flex-1'>
      <ScrollView className='flex-1 bg-[#FFF3E0]'>
        <View className="flex-1 pt-10">
          <AuthPupup popUp={popUp} setPopUp={setPopUp} />
          <View className="items-center justify-center mb-2 px-6">
            <Text className="text-[#FF7622] text-3xl font-extrabold">Tiffin Wala</Text>
            <Text className="text-[#333] text-sm mt-1 text-center">
              Fresh Meals Delivered At Your Doorstep
            </Text>
          </View>
          <View className="items-center justify-center my-2">
            <Image
              source={ImageConstant.Logo.Logo}
              className="w-36 h-36 rounded-full bg-white shadow-md"
              resizeMode="cover"
            />
          </View>
          <View className="px-6 mt-4 mb-6 items-center">
            <Text className="text-2xl font-bold text-[#111E45]">Welcome Back 👋</Text>
            <Text className="text-sm text-gray-700 mt-1 mb-3 text-center">
              Login to order your daily meals
            </Text>

            <View className="w-full mt-1">
              <Text className="text-xs text-gray-500 uppercase mb-1 text-center">What You Get</Text>
              <View className="items-center gap-1">
                <Text className="text-sm text-gray-600">• 100% Fresh Home-cooked Meals</Text>
                <Text className="text-sm text-gray-600">• Daily & Monthly Plans</Text>
                <Text className="text-sm text-gray-600">• Timely Delivery</Text>
              </View>
            </View>
          </View>
          <View className="flex-1  rounded-t-3xl p-6 shadow-lg">
            <PhoneInput setPhoneNumber={setPhoneNumber} setActiveNavigate={setActiveNavigate} />
            <View className="mt-8 gap-6">
              <LoginButton
                activenavigate={activenavigate}
                phoneNumber={phoneNumber}
                setPopUp={setPopUp}
              />
              <Text className="text-center text-xs text-gray-400 mt-4 italic">
                “Healthy food is the foundation of happiness.”
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
};

export default LoginScreen;
