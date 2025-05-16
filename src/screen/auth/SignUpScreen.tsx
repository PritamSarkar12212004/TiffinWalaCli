import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UiTheme from '../../constant/theme/ui/UiTheme';
import MainLogo from '../../constant/image/logo/MainLogo';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { userContext } from '../../context/ContextApi';




const SignupScreen = () => {
  const { setPopup } = userContext()
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

  const handleSendOtp = async () => {
    setIsLoading(true);
    if (phoneNumber.length < 10) {
      setIsLoading(false);
      setPopup({
        status: true,
        message: 'Please enter a valid 10-digit phone number',
        type: 'error',
        title: 'Error',
        func: cleanup,
      });
    } else {
      // Mocking an OTP API response
      const fakeOtp = '123456'; // replace this with actual API call
      try {
        // const res = await api.post("/api/otp/signup", { number: phoneNumber });
        setResponseotp(fakeOtp);
        setOtpSent(true);
        setShowOtpInput(true);
        setIsLoading(false);
      } catch (err: any) {
        setPopup({
          status: true,
          message: err?.response?.data?.message || "Failed to send OTP",
          type: 'error',
          title: 'Error',
          func: cleanup,
        });
        setIsLoading(false);
      }
    }
  };

  const handleVerifyOtp = () => {
    if (responseOtp === otp) {
      // Replace this with navigation or saving token
      Alert.alert("Success", "OTP verified successfully!");
      cleanup();
      navigation.navigate("UserInfo" as never); // Adjust route name
    } else {
      setPopup({
        status: true,
        message: 'Invalid OTP, please try again',
        type: 'error',
        title: 'Error',
        func: cleanup,
      });
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
        {/* Header */}
        <View className="items-center mt-12 mb-16">
          <View
            className="w-32 h-32 bg-white rounded-full mb-6 border-4 overflow-hidden"
            style={{ borderColor: UiTheme.Button.primary }}
          >
            <Image source={MainLogo.src} resizeMode='cover' className="w-full h-full" />
          </View>
          <Text className="text-4xl font-bold text-white mb-3 text-center">Join TiffinWala</Text>
          <Text className="text-zinc-400 text-center text-lg">
            Start your journey to delicious homemade meals
          </Text>
        </View>

        {/* Form */}
        <View className="bg-zinc-800/50 p-6 rounded-3xl shadow-2xl backdrop-blur-lg">
          {!showOtpInput ? (
            // Phone Number Input
            <View>
              <View className="mb-8">
                <Text className="text-zinc-400 mb-3 text-lg">Phone Number</Text>
                <View className="flex-row items-center bg-zinc-700/50 rounded-2xl px-4 py-2 border border-zinc-600">
                  <View><FontAwesome6 name="mobile" iconStyle="solid" color={UiTheme.Button.primary} size={20} />
                  </View>
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
              </View>

              <TouchableOpacity
                className="h-16 flex items-center justify-center rounded-2xl mb-6"
                onPress={() => isLoading ? null : handleSendOtp()}
                style={{ backgroundColor: UiTheme.Button.primary }}
                activeOpacity={0.8}
              >
                {isLoading ? (
                  <ActivityIndicator size="large" color={UiTheme.Button.primary} />
                ) : (
                  <Text className="text-white text-center font-bold text-lg">Send OTP</Text>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            // OTP Input 
            <View>
              <View className="mb-8">
                <Text className="text-zinc-400 mb-3 text-lg">Enter OTP</Text>
                <View className="flex-row items-center bg-zinc-700/50 rounded-2xl px-4 py-2 border border-zinc-600">
                  <View><FontAwesome6 name="lock" iconStyle="solid" color={UiTheme.Button.primary} size={20} />
                  </View>
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
                  <Text className="text-green-400 text-base mt-3">
                    OTP sent to {phoneNumber}
                  </Text>
                )}
              </View>

              <TouchableOpacity
                className="h-16 flex items-center justify-center rounded-2xl mb-6"
                onPress={() => isLoading ? null : handleVerifyOtp()}
                style={{ backgroundColor: UiTheme.Button.primary }}
                activeOpacity={0.8}
              >
                {isLoading ? (
                  <ActivityIndicator size="large" color={UiTheme.Button.primary} />
                ) : (
                  <Text className="text-white text-center font-bold text-lg">Verify OTP</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row justify-center items-center mb-6"
                onPress={() => setShowOtpInput(false)}
                activeOpacity={0.8}
              >
                <Text className="text-zinc-400 ml-2 text-base">Change phone number</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Already Have Account */}
          <View className="flex-row justify-center">
            <Text className="text-zinc-400 text-base">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
              <Text className="text-blue-400 font-bold text-base">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Benefits Section */}
        <View className="mt-12">
          <Text className="text-2xl font-bold text-white mb-6 text-center">Why Choose TiffinWala?</Text>
          <View className="flex gap-4">
            {[
              { title: 'Fresh & Homemade', desc: 'Daily fresh food made with love' },
              { title: 'Flexible Plans', desc: 'Choose your meal plan' },
              { title: 'On-Time Delivery', desc: 'Never miss your meal time' },
              { title: 'Healthy Options', desc: 'Balanced and nutritious meals' },
            ].map((item, index) => (
              <View
                key={index}
                className="flex-row items-center bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700"
              >
                <FontAwesome6 name="utensils" iconStyle="solid" color={UiTheme.Button.primary} size={30} />
                <View className="ml-4 flex-1">
                  <Text className="text-white font-semibold text-lg">{item.title}</Text>
                  <Text className="text-zinc-400 text-base">{item.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
