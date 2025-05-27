import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const VarifyButton = ({ handleVarify }: any) => {
    const navigatePage = async () => {
        handleVarify();
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigatePage()} className='bg-[#FF7622] w-full  rounded-2xl py-6 flex items-center justify-center'>
            <Text className='text-xl font-bold text-white'>Verify</Text>
        </TouchableOpacity>
    )
}

export default VarifyButton