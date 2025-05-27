import { View, Text } from 'react-native'
import React from 'react'
import Splashcard from '../../components/spalsh/cards/Splashcard'
import SplasPrimaryButton from '../../components/spalsh/buttons/SplasPrimaryButton'
import SlpashSecoundaryButton from '../../components/spalsh/buttons/SlpashSecoundaryButton'
import ImageConstant from '../../constants/image/ImageConstant'
const Splash1 = () => {
    return (
        <View className='flex-1 items-center justify-end gap-5  pb-4 bg-white '>
      <Splashcard img={ImageConstant.SplashScreenimg.Splash2} />
            <View className='w-full flex items-center justify-center gap-3'>
                <Text className='text-2xl font-bold'>Roz Ka Tiffin, Bina Jhanjhat</Text>
                <Text className=' px-10 text-center'>Subscribe once and enjoy timely delivery of fresh, hot meals — no more cooking stress!</Text>
            </View>
            <View className='w-full flex items-center justify-center gap-3 px-5'>
                <SplasPrimaryButton path='Splash3' />
                <SlpashSecoundaryButton />
            </View>
        </View>
    )
}

export default Splash1