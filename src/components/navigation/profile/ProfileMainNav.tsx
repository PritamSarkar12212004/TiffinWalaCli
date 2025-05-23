import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../icons/Icon'
import { useNavigation } from '@react-navigation/native'

const ProfileMainNav = ({ path }: any) => {
    const navigation = useNavigation()
    return (
        <View className='w-full flex flex-row items-center justify-between mb-5'>
            <TouchableOpacity activeOpacity={0.8} className='w-20' onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={25} />
            </TouchableOpacity>
            <View>
                <Text className='text-xl tracking-widest text-white font-semibold'>{path}</Text>
            </View>
            <View className='w-20'>
            </View>
        </View>
    )
}

export default ProfileMainNav