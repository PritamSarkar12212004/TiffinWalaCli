import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FIcon from '../../../../layout/icon/FIcon'

const CateguaryDahs = () => {
  const [selected, setSelected] = useState(1)
  const options = [
    {
      id: 1,
      name: 'All',
      icon: 'fire',
      color: 'orange'
    },
    {
      id: 2,
      name: 'VEG',
      icon: 'leaf',
      color: 'green'

    },
    {
      id: 3,
      name: 'NON-VEG',
      icon: 'egg',
      color: 'red'

    },
    {
      id: 4,
      name: 'Vegan',
      icon: 'seedling',
      color: 'green'

    },

  ]
  return (
    <View className='w-full flex '>
      <View className='w-full flex flex-row items-center justify-between'>
        <Text className='text-xl font-semibold '>All Categories</Text>
      </View>
      <View className='w-full flex flex-row '>
        <ScrollView className='w-full flex py-3 ' horizontal showsHorizontalScrollIndicator={false}>
          {
            options.map((item, index) => (
              <TouchableOpacity onPress={() => setSelected(item.id)} activeOpacity={0.8} key={index} className='pr-10 p-2 flex flex-row items-center gap-5  mr-5 rounded-full' style={{ backgroundColor: selected == item.id ? "#FFD27C" : null }}    >
                <View className='h-16 w-16 rounded-full bg-white flex items-center flex items-center justify-center'>
                  <FIcon name={item.icon} size={30} color={item.color} />
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