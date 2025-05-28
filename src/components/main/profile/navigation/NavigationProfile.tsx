import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'

const NavigationProfile = ({ path, option, func }: any) => {
    const navigation = useNavigation()
    return (
        <View className='w-full flex  flex-row items-center justify-between pb-3'>
            <View className='flex flex-row items-center justify-center gap-6'>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} className='h-14 w-14 bg-[#d5d9dc] rounded-full flex items-center justify-center'>
                    <FIcon name='chevron-left' size={30} color='black' />
                </TouchableOpacity>
                <Text className='text-2xl tracking-widest font-semibold'>{path}</Text>
            </View>
            <View className='flex items-center justify-center'>
                <TouchableOpacity onPress={func} activeOpacity={0.8} className='flex items-center justify-center'>
                    <Text className='text-xl underline font-semibold text-[#FF7622]'>{option}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavigationProfile