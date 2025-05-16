import { Image, View } from 'react-native'
import React from 'react'
import SplashTheme from '../../constant/theme/splash/SplashTheme'
import MainLogo from '../../constant/image/logo/MainLogo'
import SplashNavigateButton from '../../components/buttons/splash/SplashNavigateButton'


const SplashOne = () => {
  return (
    <View className='flex-1 px-3 flex items-center justify-between py-10' style={{ backgroundColor: SplashTheme.bgColor }}>
      <View></View>
      <View>
        <Image source={MainLogo.src} resizeMode='cover' />
      </View>
      <View>
        <SplashNavigateButton />
      </View>
    </View>
  )
}

export default SplashOne