import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'

const NavigationProfile = ({ path, option, func }: any) => {
    const navigation = useNavigation()
    return (
        <View className='w-full flex flex-row items-center justify-between pb-3'>
            <View className='flex-1 flex flex-row items-center gap-3'>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.goBack()}
                    className='h-11 w-11 rounded-2xl bg-black/80 flex items-center justify-center shadow-lg shadow-black/30'>
                    <FIcon name='chevron-left' size={16} color='white' />
                </TouchableOpacity>
                <Text className='text-xl font-bold tracking-widest' numberOfLines={1}>{path}</Text>
            </View>
            <View className='flex items-center justify-center'>
                {!!option && (
                    <TouchableOpacity
                        onPress={func}
                        activeOpacity={0.9}
                        className='px-4 h-11 rounded-2xl bg-[#FF7622] flex items-center justify-center shadow-lg shadow-black/20'>
                        <Text className='text-white font-semibold'>{option}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default NavigationProfile