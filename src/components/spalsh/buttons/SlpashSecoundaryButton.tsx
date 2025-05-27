import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PageToken from '../../../constants/tokens/PageToken'
import { setSplashToken } from '../../../functions/Token/PageTokenManagerFun'

const SlpashSecoundaryButton = () => {
    const navigation = useNavigation()
    const pagenavigation = async () => {
        await setSplashToken(PageToken.SplashToken, true)
        navigation.replace("AuthNavigations" as never)
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => pagenavigation()} className=' w-full  rounded-2xl py-6 flex items-center justify-center'>
            <Text className='text-xl font-bold text-black'>Skip</Text>
        </TouchableOpacity>
    )
}

export default SlpashSecoundaryButton