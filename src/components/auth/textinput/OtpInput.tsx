import { View, Text, TextInput } from 'react-native'
import React from 'react'

const OtpInput = () => {
    return (
        <View className='w-full flex gap-2'>
            <Text className='text-xl font-semibold text-zinc-900'>Code</Text>
            <TextInput className='bg-[#F0F5FA] px-5  h-16 w-full text-xl rounded-3xl text-zinc-700 placeholder:text-zinc-700' placeholder='verify otp' keyboardType='number-pad' />
        </View>
    )
}

export default OtpInput