import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginButton = () => {
    const navigation = useNavigation();
    const navigatePage = async () => {
        navigation.navigate('Varifypage' as never);
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigatePage()} className='bg-[#FF7622] w-full  rounded-2xl py-6 flex items-center justify-center'>
            <Text className='text-xl font-bold text-white'>NEXT</Text>
        </TouchableOpacity>
    )
}

export default LoginButton