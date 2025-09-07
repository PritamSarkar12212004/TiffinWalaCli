import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const VarifyButton = ({ handleVarify, loading }: any) => {
    const navigatePage = async () => {
        handleVarify();
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigatePage()} className='bg-[#FF7622] w-full  rounded-2xl h-14 flex items-center justify-center'>
            {
                loading ? <ActivityIndicator
                    size={'small'}
                    color={'white'}
                /> : <Text className='text-lg font-semibold text-white'>Verify</Text>

            }
        </TouchableOpacity>
    )
}

export default VarifyButton