import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { setSplashToken } from '../../../functions/Token/PageTokenManagerFun'
import PageToken from '../../../constants/tokens/PageToken'

const SplasPrimaryButton = ({ path }: any) => {
    const navigation = useNavigation()
    const navigatePage = async () => {
        if (path === 'login') {
            await setSplashToken(PageToken.SplashToken, true)
            navigation.replace('AuthNavigations' as never)
        } else {
            navigation.navigate(path)
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigatePage()} className='bg-[#FF7622] w-full  rounded-2xl py-6 flex items-center justify-center'>
            <Text className='text-xl font-bold text-white'>NEXT</Text>
        </TouchableOpacity>
    )
}

export default SplasPrimaryButton