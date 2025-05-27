import { TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'



const AuthNavigation = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} className='h-16 w-16 rounded-full bg-white flex items-center justify-center'>
      <FIcon size={25} name='arrow-left' color='gray' />
    </TouchableOpacity>
  )
}

export default AuthNavigation