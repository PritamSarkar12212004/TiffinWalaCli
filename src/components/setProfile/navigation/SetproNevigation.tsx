import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'
const SetproNevigation = () => {
    const navigation = useNavigation()
    return (
        <View className='w-full flex flex-row px-3 items-center justify-between'>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} className='h-12 w-12 rounded-full flex items-center justify-center  bg-black'>
                <FIcon size={15} name='arrow-left' color='white' />
            </TouchableOpacity>
            <View className=''>
                <Text className='text-2xl font-semibold mt-3'>Create Profile</Text>
            </View>
            <View className='w-14 h-12' ></View>
        </View>
    )
}

export default SetproNevigation