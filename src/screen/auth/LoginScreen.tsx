import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UiTheme from '../../constant/theme/ui/UiTheme';
import MainLogo from '../../constant/image/logo/MainLogo';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseOtp, setResponseotp] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  const handleSendOtp = () => {
    if (phoneNumber.length < 10) {
      Alert.alert('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    // Simulate OTP send
    const generatedOtp = '123456';
    setResponseotp(generatedOtp);
    setOtpSent(true);
    setShowOtpInput(true);
    setIsLoading(false);
  };

  const handleVerifyOtp = () => {
    setIsLoading(true);
    if (otp === responseOtp) {
      // Simulate login success
      Alert.alert('Login successful');
      setIsLoading(false);
      navigation.navigate('Home' as never); // Replace 'Home' with your route name
    } else {
      Alert.alert('Invalid OTP, please try again');
      setIsLoading(false);
    }
  };

  const cleanup = () => {
    setOtpSent(false);
    setResponseotp('');
    setShowOtpInput(false);
    setOtp('');
    setPhoneNumber('');
  };

  return (
    <ScrollView className="flex-1 bg-black" showsVerticalScrollIndicator={false}>
      <View className="flex-1 py-6 px-3 ">
        {/* Logo and Welcome */}
        <View className="items-center mt-12 mb-16">
          <View className="w-32 h-32 rounded-full bg-white mb-6  overflow-hidden" >
            <Image source={MainLogo.src} resizeMode='cover' className="w-full h-full" />
          </View>
          <Text className="text-4xl font-bold text-white mb-3 text-center">Welcome to TiffinWala</Text>
          <Text className="text-zinc-400 text-center text-lg">Your daily dose of homemade happiness</Text>
        </View>

        {/* Form Card */}
        <View className="bg-zinc-800/50 p-6 rounded-3xl shadow-2xl backdrop-blur-lg">
          {!showOtpInput ? (
            <>
              <Text className="text-zinc-400 mb-3 text-lg">Phone Number</Text>
              <View className="flex-row items-center bg-zinc-700/50 rounded-2xl px-4 py-2 border border-zinc-600">
                <TextInput
                  className="flex-1 ml-3 text-white text-lg"
                  placeholder="Enter your phone number"
                  placeholderTextColor="#666"
                  value={phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                  keyboardType="phone-pad"
                  maxLength={10}
                />
              </View>
              <TouchableOpacity
                className="h-16 items-center justify-center rounded-2xl mt-8 mb-6"
                onPress={handleSendOtp}
                style={{ backgroundColor: UiTheme.Button.primary }}
                activeOpacity={0.8}
              >
                {isLoading ? (
                  <ActivityIndicator size="large" color="#ffffff" />
                ) : (
                  <Text className="text-white text-center font-bold text-lg">Send OTP</Text>
                )}
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text className="text-zinc-400 mb-3 text-lg">Enter OTP</Text>
              <View className="flex-row items-center bg-zinc-700/50 rounded-2xl px-4 py-4 border border-zinc-600">
                <TextInput
                  className="flex-1 ml-3 text-white text-lg"
                  placeholder="Enter 6-digit OTP"
                  placeholderTextColor="#666"
                  value={otp}
                  onChangeText={setOtp}
                  keyboardType="number-pad"
                  maxLength={6}
                />
              </View>
              {otpSent && (
                <Text className="text-green-400 text-base mt-3">OTP sent to {phoneNumber}</Text>
              )}
              <TouchableOpacity
                className="h-16 items-center justify-center rounded-2xl mt-8 mb-6"
                onPress={handleVerifyOtp}
                style={
                  { backgroundColor: isLoading ? UiTheme.Button.primary : UiTheme.Button.primary }
                } // Replace with BgColor.Accent
                activeOpacity={0.8}
              >
                {isLoading ? (
                  <ActivityIndicator size="large" color="#ffffff" />
                ) : (
                  <Text className="text-white text-center font-bold text-lg">Verify OTP</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row justify-center items-center mb-6"
                onPress={cleanup}
                activeOpacity={0.8}
              >
                <Text className="text-zinc-400 ml-2 text-base">Change phone number</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Sign Up */}
          <View className="flex-row justify-center">
            <Text className="text-zinc-400 text-base">Don't have an account? </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('SignupScreen' as never)}>
              <Text className="text-blue-400 font-bold text-base">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features */}
        <View className="mt-12 flex-row flex-wrap justify-between">
          {[
            { title: 'Daily Fresh Food', desc: 'Made with love' },
            { title: 'On-Time Delivery', desc: 'Always punctual' },
            { title: 'Healthy Options', desc: 'Balanced diet' },
            { title: 'Home Style', desc: "Just like mom's" },
          ].map((item, index) => (
            <View
              key={index}
              className="bg-zinc-800/50 p-6 rounded-3xl w-[48%] mb-6 border border-zinc-700"
            >
              <Text className="text-white mt-3 text-lg font-semibold">{item.title}</Text>
              <Text className="text-zinc-400 text-base">{item.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
