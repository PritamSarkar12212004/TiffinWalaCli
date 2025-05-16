import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LottiAnimation from '../../layout/animation/LottiAnimation'
import Animation from '../../constant/animation/Animation'
import { userContext } from '../../context/ContextApi'

const ErrorOpoup = () => {
    const { setPopup, popup } = userContext()
    const handleCancle = () => {
        setPopup({
            status: false,
            message: "",
            type: "success",
            title: "",
            func: () => { },
        })
    }
    return (
        <View className='w-80 py-3  flex items-center justify-between bg-zinc-500 rounded-3xl flex items-center justify-center opacity-100'>
            <View className='w-full flex items-center justify-center'>
                <LottiAnimation path={Animation.ErrorOpoup} />
                {
                    popup.type === "error" ? (
                        <Text className='text-2xl text-red-500 font-extrabold text-center px-5'>{popup.title}</Text>
                    ) : (
                        <Text className='text-2xl text-green-500 font-extrabold text-center px-5'>{popup.title}</Text>
                    )
                }
                <Text className='text-sm text-white font-semibold text-center px-5'>{popup.message}</Text>
            </View>
            <View className='w-full flex flex-row items-center border-t-[1px] border-zinc-700 px-8 py-3'>
                <TouchableOpacity activeOpacity={0.8} onPress={() => handleCancle()} className='w-full bg-orange-600 py-2 rounded-3xl flex items-center justify-center'><Text className='text-xl  text-white font-semibold'>Cancle</Text></TouchableOpacity>

            </View>
        </View>
    )
}

export default ErrorOpoup