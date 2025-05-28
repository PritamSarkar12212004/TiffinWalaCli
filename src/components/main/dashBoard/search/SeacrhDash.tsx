import { View, Text } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'

const SeacrhDash = ({ name }: any) => {
    return (
        <View className='w-full flex gap-4 '>
            <Text className=''>Hey {name}, <Text className='font-bold'>Welcome!</Text></Text>
            <View>
                <View className='w-full bg-[#A0A5BA] h-16 gap-4 rounded-3xl flex flex-row px-5 items-center'>
                    <FIcon name='magnifying-glass' size={30} color='white' />
                    <Text className='text-white text-lg'>Search dishes, restaurants</Text>
                </View>
            </View>
        </View>
    )
}

export default SeacrhDash