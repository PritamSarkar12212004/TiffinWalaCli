import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CreateProfileButton = ({ content, profileCreater }: any) => {
    const [loading, setLoading] = useState(false)
    const handlePress = () => {
        setLoading(true)
        profileCreater()
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => loading ? null : handlePress()} className='bg-[#FF7622] w-full  rounded-2xl py-6 flex items-center h-20 justify-center'>
            {
                loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : <Text className='text-xl  flex flex-row gap-3 font-bold text-white'>{content}</Text>
            }
        </TouchableOpacity>
    )
}

export default CreateProfileButton