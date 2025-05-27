import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import useCallOtpSignup from '../../../hooks/auth/signup/useCallOtpSignup';

const LoginButton = ({ activenavigate, phoneNumber, setPopUp }: any) => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const { callOtpSignup } = useCallOtpSignup()
    const navigatePage = async () => {
        if (activenavigate) {
            setLoading(true)
            await activenavigate === true ? callOtpSignup({ phoneNumber: phoneNumber, setLoading: setLoading, navigation: navigation, setPopUp: setPopUp }) : null
        } else {
            setPopUp({ isVisible: true, message: 'Please enter your phone number' })
        }

    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigatePage()} className='bg-[#FF7622] w-full  rounded-2xl h-20 flex items-center justify-center'>
            {
                loading ? <ActivityIndicator
                    color='white' size='large'
                /> : <Text className='text-xl font-bold text-white'>NEXT</Text>

            }
        </TouchableOpacity>
    )
}

export default LoginButton