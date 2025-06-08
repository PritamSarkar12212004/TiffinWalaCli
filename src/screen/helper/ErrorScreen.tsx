import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AnimationLotti from '../../components/global/animation/AnimationLotti'
import AnimationPath from '../../constants/animation/AnimationPath'
import { useNavigation } from '@react-navigation/native'

const ErrorScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView className='flex-1 bg-[#F3F3F3] '>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#F3F3F3'} />
            <View className='flex-1 flex items-center justify-center'>
                <AnimationLotti path={AnimationPath.MainError} width={350} height={350} bg='#F3F3F3' />
                <View className='w-full flex items-center justify-center  flex-row'>
                    <Text className='text-4xl font-semibold tracking-widest'>O</Text>
                    <Text className='text-2xl font-semibold tracking-widest'>ops!</Text>
                </View>
                <View className='flex gap-2 items-center justify-center'>
                    <Text className='text-center text-2xl font-semibold tracking-widest'>Something went wrong</Text>
                </View>
                <View className='w-full flex px-10  mt-10'>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.replace('Mainnavigation' as never)} className='bg-[#000] px-10 h-16 rounded-full flex items-center justify-center'>
                        <Text className='text-white text-lg font-semibold tracking-widest' > Try Again</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView >
    )
}

export default ErrorScreen