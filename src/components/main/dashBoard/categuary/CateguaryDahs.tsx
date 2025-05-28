import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FIcon from '../../../../layout/icon/FIcon'

const CateguaryDahs = () => {
  const [selected, setSelected] = useState(1)
  const options = [
    {
      id: 1,
      name: 'All',
      icon: 'home'
    },
    {
      id: 2,
      name: 'VEG',
      icon: 'VEG'
    },
    {
      id: 3,
      name: 'NON-VEG',
      icon: 'NON-VEG'
    },

  ]
  return (
    <View className='w-full flex '>
      <View className='w-full flex flex-row items-center justify-between'>
        <Text className='text-xl font-semibold '>All Categories</Text>
        <TouchableOpacity activeOpacity={0.8} className='flex flex-row gap-3 items-center justify-center'>
          <Text className=' '>See All</Text>
          <FIcon name='chevron-right' size={15} color='#A0A5BA' />
        </TouchableOpacity>
      </View>
      <View className='w-full flex flex-row mt-4'>
        <ScrollView className='w-full flex py-3 ' horizontal showsHorizontalScrollIndicator={false}>
          {
            options.map((item, index) => (
              <TouchableOpacity onPress={() => setSelected(item.id)} activeOpacity={0.8} key={index} className='pr-10 p-2 flex flex-row items-center gap-5  mr-5 rounded-full' style={{ backgroundColor: selected == item.id ? "#FFD27C" : null }}    >
                <View className='h-16 w-16 rounded-full bg-[#98A8B8]'>
                </View>
                <Text className='text-lg font-semibold'>{item.name}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View >
    </View >
  )
}

export default CateguaryDahs