import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'

const NavigationShowProduct = () => {
    return (
        <View className='w-full flex flex-row items-center justify-between px-3 left-0 absolute top-5 z-50'>
            <TouchableOpacity activeOpacity={0.8} className='h-16 flex items-center justify-center w-16 flex items-center justify-center bg-white rounded-full '>
                <FIcon name='chevron-left' size={25} color='black' />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} className='h-16 flex items-center justify-center w-16 flex items-center justify-center bg-white rounded-full '>
                <FIcon name='heart' size={25} color='red' />

            </TouchableOpacity>
        </View>
    )
}

export default NavigationShowProduct