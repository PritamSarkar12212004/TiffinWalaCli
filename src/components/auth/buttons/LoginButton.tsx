import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import useLoginvarification from '../../../hooks/auth/login/useLoginvarification';
import { useNotify } from '../../../layout/wraper/ComProviderWraper';

const LoginButton = ({ activenavigate, phoneNumber, setPopUp }: any) => {
    const { caller } = useNotify()
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const { otpvarify } = useLoginvarification()
    const navigatePage = async () => {
        if (activenavigate) {
            setLoading(true)
            await activenavigate === true ? otpvarify({
                phoneNumber: phoneNumber, setPopUp: setPopUp, setLoading: setLoading, navigation: navigation
            }) : null
        } else {
            caller({
                message: 'Invalid Number',
                description: 'Please enter a valid mobile number.',
                type: 'danger',
            });
        }
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigatePage()} className='bg-[#FF7622] w-full  rounded-2xl h-14 flex items-center justify-center'>
            {
                loading ? <ActivityIndicator
                    color='white' size='small'
                /> : <Text className='text-lg font-semibold text-white'>NEXT</Text>

            }
        </TouchableOpacity>
    )
}

export default LoginButton