import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../types/navigation'

const SeacrhDash = ({ name, distance }: any) => {
    const navigation = useNavigation<NavigationProp>()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', {
            distance: distance
        })} activeOpacity={0.9} className='w-full flex gap-4 '>
            <Text className=''>Hey {name}, <Text className='font-bold'>Welcome!</Text></Text>
            <View>
                <View className='w-full bg-[#A0A5BA] h-14 gap-4 rounded-3xl flex flex-row px-5 items-center'>
                    <FIcon name='magnifying-glass' size={22} color='white' />
                    <Text className='text-white '>Search dishes, restaurants</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SeacrhDash