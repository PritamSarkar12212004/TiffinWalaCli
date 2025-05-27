import { View, Text } from 'react-native'
import React from 'react'
import Splashcard from '../../components/spalsh/cards/Splashcard'
import SplasPrimaryButton from '../../components/spalsh/buttons/SplasPrimaryButton'
import SlpashSecoundaryButton from '../../components/spalsh/buttons/SlpashSecoundaryButton'
import ImageConstant from '../../constants/image/ImageConstant'
const Splash1 = () => {
  return (
    <View className='flex-1 items-center justify-end gap-5  pb-4 bg-white '>
      <Splashcard img={ImageConstant.SplashScreenimg.Splash1} />
      <View className='w-full flex items-center justify-center gap-3'>
        <Text className='text-2xl font-bold'>Ghar Jaisa Swaad</Text>
        <Text className=' px-10 text-center'>Healthy, home-style food delivered fresh to your doorstep — perfect for students & working professionals.</Text>
      </View>
      <View className='w-full flex items-center justify-center gap-3 px-5'>
        <SplasPrimaryButton path='Splash2' />
        <SlpashSecoundaryButton />
      </View>
    </View>
  )
}

export default Splash1