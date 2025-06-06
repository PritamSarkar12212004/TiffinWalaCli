import { View, Image } from 'react-native'
import React from 'react'

const Splashcard = ({ img }) => {
    return (
        <View className='w-80 h-96  rounded-2xl bg-[#98A8B8] '>
            <Image source={img} className='w-full h-full rounded-2xl' />
        </View>
    )
}

export default Splashcard