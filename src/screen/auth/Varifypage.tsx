import { View, Text, Image } from 'react-native';
import React from 'react';
import AuthNavigation from '../../components/auth/navigation/AuthNavigation';
import OtpInput from '../../components/auth/textinput/OtpInput';
import VarifyButton from '../../components/auth/buttons/VarifyButton';
import ImageConstant from '../../constants/image/ImageConstant';

const Varifypage = () => {
    return (
        <View className="flex-1 bg-black pt-5">
            <Image source={ImageConstant.Auth.AuthHeaderimage} className='w-full h-full absolute top-0 left-0' />
            <View className="w-full h-20" >
                <AuthNavigation />
            </View>
            <View className="w-full items-center gap-4 justify-center px-3 pt-5 pb-14">
                <Text className="text-3xl text-white font-bold">
                    Verification
                </Text>
                <Text className="text-white">
                    We have sent a code to your email
                </Text>
            </View>
            <View className="flex-1 items-center justify-between bg-white rounded-t-[40px] pt-10 px-5 pb-10">
                <OtpInput />
                <View className="w-full gap-8 items-center justify-center px-5">
                    <VarifyButton />
                </View>
            </View>
        </View>
    );
};

export default Varifypage;
