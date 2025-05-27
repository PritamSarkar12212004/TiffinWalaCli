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

    // auth popup
    const [popUp, setPopUp] = useState<{
        isVisible: boolean;
        message: string;
    }>({
        isVisible: false,
        message: '',
    });
    const navigation = useNavigation()
    const route = useRoute()
    const { phoneNumber, otp, path } = route.params as any;
    const [enterOtp, setEnterOtp] = useState(null);
    const [loading, setLoading] = useState(false)
    const { setTempPhomne } = userContext()
    const { varifyotp } = usevarifySignUpTop()
    const { varifyotpLogin } = useLoginVarify()
    const handleVarify = () => {
        if (path == 'login') {
            varifyotpLogin({ enterOtp: enterOtp, otp: otp, phoneNumber: phoneNumber, navigation: navigation, setPopUp: setPopUp, setLoading: setLoading });
        } else {
            varifyotp({ enterOtp: enterOtp, otp: otp, phoneNumber: phoneNumber, navigation: navigation, setTempPhomne: setTempPhomne, setPopUp: setPopUp });
        }
    }
    return (
        <View className="flex-1 bg-black pt-5">
            <AuthPupup popUp={popUp} setPopUp={setPopUp} />

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
                <OtpInput setEnterOtp={setEnterOtp} />
                <View className="w-full gap-8 items-center justify-center px-5">
                    <VarifyButton handleVarify={handleVarify} loading={loading} />
                </View>
            </View>
        </View>
    );
};

export default Varifypage;
