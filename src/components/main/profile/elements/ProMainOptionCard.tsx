import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'

const ProMainOptionCard = ({
  option,
  index,
}: any) => {
  return (
    <TouchableOpacity onPress={() => option.function()} activeOpacity={0.9} key={index} className='w-full py-3 flex flex-row items-center justify-between'>
      <View className='flex flex-row items-center gap-4'>
        <View className='h-[52px] w-[52px] rounded-2xl bg-white flex items-center justify-center shadow-md shadow-black/10'>
          <FIcon name={option.icon} size={20} color={option.color} />
        </View>
        <Text className='text-base font-semibold'>{option.title}</Text>
      </View>
      <View className='flex items-center justify-center'>
        <FIcon name='chevron-right' size={18} color='gray' />
      </View>
    </TouchableOpacity>
  )
}

export default ProMainOptionCard