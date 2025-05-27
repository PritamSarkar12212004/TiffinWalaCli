import { View, Text } from 'react-native'
import React from 'react'
import Splashcard from '../../components/spalsh/cards/Splashcard'
import SplasPrimaryButton from '../../components/spalsh/buttons/SplasPrimaryButton'
import SlpashSecoundaryButton from '../../components/spalsh/buttons/SlpashSecoundaryButton'
import ImageConstant from '../../constants/image/ImageConstant'
const Splash3 = () => {
  return (
    <View className='flex-1 items-center justify-end gap-5  pb-4 bg-white '>
      <Splashcard img={ImageConstant.SplashScreenimg.Splash3} />
      <View className='w-full flex items-center justify-center gap-3'>
        <Text className='text-2xl font-bold'>Pocket Mein Fit, Pet Mein Hit</Text>
        <Text className=' px-10 text-center'>Get all your loved foods in one once place,
          Choose from flexible and budget-friendly plans — starting at just ₹xx/day!
        </Text>
      </View>
      <View className='w-full flex items-center justify-center gap-3 px-5'>
        <SplasPrimaryButton path='login' />
        <SlpashSecoundaryButton />
      </View>
    </View>
  )
}

export default Splash3