import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'

const ProMainOptionCard = ({
  option,
  index,
}: any) => {
  return (
    <TouchableOpacity activeOpacity={0.8} key={index} className='w-full py-2 flex flex-row items-center justify-between' >
      <View className='flex flex-row items-center  gap-5'>
        <View className='h-16 w-16 rounded-full bg-white flex items-center justify-center'>
          <FIcon name={option.icon} size={25} color={option.color} />

        </View>
        <Text className='text-xl font-semibold'>{option.title}</Text>
      </View>
      <View className='flex items-center justify-center'>
        <FIcon name='chevron-right' size={20} color='gray' />
      </View>
    </TouchableOpacity>
  )
}

export default ProMainOptionCard