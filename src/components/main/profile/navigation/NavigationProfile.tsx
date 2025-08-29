import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'

const NavigationProfile = ({ path, option, func }: any) => {
    const navigation = useNavigation()
    return (
        <View className='w-full flex  flex-row items-center justify-between pb-3'>
            <View className='flex flex-row items-center justify-center gap-6'>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} className='h-12 w-12 bg-black/60 rounded-full flex items-center justify-center'>
                    <FIcon name='chevron-left' size={15} color='white' />
                </TouchableOpacity>
            </View>
            <Text className='text-xl tracking-widest font-semibold'>{path}</Text>
            <View className='flex items-center justify-center'>
                <TouchableOpacity onPress={func} activeOpacity={0.8} className='flex items-center justify-center h-12 w-12'>
                    <Text className='text-xl   text-[#FF7622]'>{option}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavigationProfile