import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import AuthNavigation from '../../components/auth/navigation/AuthNavigation';
import OtpInput from '../../components/auth/textinput/OtpInput';
import VarifyButton from '../../components/auth/buttons/VarifyButton';
import ImageConstant from '../../constants/image/ImageConstant';
import { useNavigation, useRoute } from '@react-navigation/native';
import usevarifySignUpTop from '../../hooks/auth/signup/usevarifySignUpTop';
import { userContext } from '../../utils/context/ContextProvider';
import AuthPupup from '../../layout/popUp/AuthPupup';
import useLoginVarify from '../../hooks/auth/login/useLoginVarify';

const Varifypage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { phoneNumber, otp, path } = route.params as any;

    const [enterOtp, setEnterOtp] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const { setTempPhomne } = userContext();
    const { varifyotp } = usevarifySignUpTop();
    const { varifyotpLogin } = useLoginVarify();

    const [popUp, setPopUp] = useState({
        isVisible: false,
        message: '',
    });

    const handleVarify = () => {
        if (path === 'login') {
            varifyotpLogin({
                enterOtp,
                otp,
                phoneNumber,
                navigation,
                setPopUp,
                setLoading,
            });
        } else {
            varifyotp({
                enterOtp,
                otp,
                phoneNumber,
                navigation,
                setTempPhomne,
                setPopUp,
            });
        }
    };

    return (
        <View className="flex-1 bg-[#FFF3E0] ">
            <AuthPupup popUp={popUp} setPopUp={setPopUp} />

            {/* 🔙 Back Nav */}
            <View className="px-4">
                <AuthNavigation />
            </View>

            {/* 🧭 App Info */}
            <View className="items-center justify-center px-6 mt-2">
                <Text className="text-[#FF7622] text-3xl font-extrabold">Tiffin Wala 🍱</Text>
                <Text className="text-[#333] text-sm mt-1 text-center">
                    Confirm your phone number to continue
                </Text>
            </View>

            {/* 📩 Illustration or Logo */}
            <View className="items-center justify-center my-2">
                <Image
                    source={ImageConstant.Logo.Logo}
                    className="w-36 h-36 rounded-full bg-white shadow-md"
                    resizeMode="cover"
                />
            </View>

            {/* 📲 OTP Section */}
            <View className="flex-1 bg-white rounded-t-3xl p-6 shadow-lg">
                <Text className="text-2xl font-bold text-[#111E45] text-center mb-2">OTP Verification 🔐</Text>
                <Text className="text-sm text-gray-500 text-center mb-4">
                    We have sent a 4-digit code to your phone number
                </Text>

                <OtpInput setEnterOtp={setEnterOtp} />

                <View className="mt-8 gap-6">
                    <VarifyButton handleVarify={handleVarify} loading={loading} />
                    <Text className="text-center text-xs text-gray-400 mt-4 italic">
                        “Your meals are just one step away.”
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Varifypage;
