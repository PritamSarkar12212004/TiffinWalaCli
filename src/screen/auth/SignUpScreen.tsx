import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import PhoneInput from '../../components/auth/textinput/PhoneInput';
import LoginButton from '../../components/auth/buttons/LoginButton';
import AuthNavigation from '../../components/auth/navigation/AuthNavigation';
import ImageConstant from '../../constants/image/ImageConstant';
import AuthPupup from '../../layout/popUp/AuthPupup';

const SignupScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [activenavigate, setActiveNavigate] = useState<boolean>(false);

    // auth popup
    const [popUp, setPopUp] = useState<{
        isVisible: boolean;
        message: string;
    }>({
        isVisible: false,
        message: '',
    });

    return (
        <View className="flex-1 bg-black pt-5">
            <AuthPupup popUp={popUp} setPopUp={setPopUp} />
            <Image source={ImageConstant.Auth.AuthHeaderimage} className='w-full h-full absolute top-0 left-0' />
            <View className="w-full h-20" >
                <AuthNavigation />
            </View>
            <View className="w-full items-center gap-4 justify-center px-3 pt-5 pb-14">
                <Text className="text-3xl text-white font-bold">
                    Sign Up
                </Text>
                <Text className="text-white">
                    Please sign up to get started
                </Text>
            </View>
            <View className="flex-1 items-center justify-between bg-white rounded-t-[40px] pt-10 px-5 pb-10">
                <PhoneInput setActiveNavigate={setActiveNavigate} setPhoneNumber={setPhoneNumber} />
                <View className="w-full gap-8 items-center justify-center px-5">
                    <LoginButton activenavigate={activenavigate} phoneNumber={phoneNumber} setPopUp={setPopUp} />
                </View>
            </View>
        </View>
    );
};

export default SignupScreen;
