import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputField = ({ title, placeholder, setinput }: any) => {
    return (
        <View className='w-full flex gap-2'>
            <Text className='text-xl font-semibold text-zinc-700'>{title}</Text>
            <TextInput onChangeText={(text) => setinput(text)} className='w-full bg-gray-200 text-zinc-500 placeholder:text-zinc-500 h-16 rounded-xl text-xl font-semibold px-4' placeholder={placeholder} />
        </View>
    )
}

export default InputField