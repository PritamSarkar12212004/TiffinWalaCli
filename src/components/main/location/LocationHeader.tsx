import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'

const LocationHeader = () => {
    const navigation = useNavigation()
    return (
        <View className='w-full flex absolute top-10 px-3 z-50 '>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} className='h-16 w-16 bg-[#32343E] rounded-full flex items-center justify-center'>
                <FIcon name='ban' color='white' size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default LocationHeader