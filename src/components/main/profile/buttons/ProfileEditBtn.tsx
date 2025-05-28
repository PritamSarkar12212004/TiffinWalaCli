import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileEditBtn = () => {
    return (
        <TouchableOpacity activeOpacity={0.9} className='w-full h-20 bg-[#FF7622] rounded-2xl flex items-center justify-center'>
            <Text className='text-xl font-bold text-white'>NEXT</Text>
        </TouchableOpacity >
    )
}

export default ProfileEditBtn