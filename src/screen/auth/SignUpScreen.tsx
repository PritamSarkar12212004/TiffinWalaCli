import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from '../../components/auth/textinput/PhoneInput';
import LoginButton from '../../components/auth/buttons/LoginButton';
import AuthPupup from '../../layout/popUp/AuthPupup';
import ImageConstant from '../../constants/image/ImageConstant';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [activenavigate, setActiveNavigate] = useState<boolean>(false);

    const [popUp, setPopUp] = useState({
        isVisible: false,
        message: '',
    });

    return (
        <View className="flex-1 bg-[#FFF3E0] pt-10">
            <AuthPupup popUp={popUp} setPopUp={setPopUp} />

            {/* 🔶 Header with App Name */}
            <View className="items-center justify-center mb-4 px-6">
                <Text className="text-[#FF7622] text-3xl font-extrabold">Tiffin Wala</Text>
                <Text className="text-[#333] text-sm mt-1 text-center">
                    Join us for daily deliciousness
                </Text>
            </View>

            {/* 🖼️ App Logo */}
            <View className="items-center justify-center my-2">
                <Image
                    source={ImageConstant.Logo.Logo}
                    className="w-36 h-36 rounded-full bg-white shadow-md"
                    resizeMode="cover"
                />
            </View>

            {/* 📝 Title & Feature Info */}
            <View className="px-6 mt-4 mb-6 items-center">
                <Text className="text-2xl font-bold text-[#111E45]">Create Account 👤</Text>
                <Text className="text-sm text-gray-700 mt-1 mb-3 text-center">
                    Sign up to get started with your meal journey
                </Text>

                <View className="w-full mt-1">
                    <Text className="text-xs text-gray-500 uppercase mb-1 text-center">Why Sign Up?</Text>
                    <View className="items-center gap-1">
                        <Text className="text-sm text-gray-600">• Track orders easily</Text>
                        <Text className="text-sm text-gray-600">• Access subscription plans</Text>
                        <Text className="text-sm text-gray-600">• Save delivery preferences</Text>
                    </View>
                </View>
            </View>

            {/* 📲 Signup Form Card */}
            <View className="flex-1 bg-white rounded-t-3xl p-6 shadow-lg">
                <PhoneInput setActiveNavigate={setActiveNavigate} setPhoneNumber={setPhoneNumber} />

                <View className="mt-8 gap-6">
                    <LoginButton
                        activenavigate={activenavigate}
                        phoneNumber={phoneNumber}
                        setPopUp={setPopUp}
                    />

                    {/* 🔁 Back to Login */}
                    <View className="flex-row justify-center">
                        <Text className="text-gray-500">Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text className="text-[#FF7622] font-semibold ml-1">Login</Text>
                        </TouchableOpacity>
                    </View>
                    {/* ❤️ Footer Note */}
                    <Text className="text-center text-xs text-gray-400 mt-4 italic">
                        “Good food is good mood.”
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default SignupScreen;