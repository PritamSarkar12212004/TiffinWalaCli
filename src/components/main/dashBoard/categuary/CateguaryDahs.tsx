import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import FoodType from '../../../../data/dashBoard/foodType/FoodType'

const CateguaryDahs = ({
  foodType, setFoodType, setPageLoader, pageLoader
}: any) => {
  const handelChange = (item: any) => {
    setFoodType(item)
    setPageLoader(!pageLoader)
  }
  return (
    <View className='w-full flex '>
      <View className='w-full flex flex-row items-center justify-between'>
        <Text className='text-xl font-semibold '>All Categories</Text>
      </View>
      <View className='w-full flex flex-row '>
        <ScrollView className='w-full flex py-3 ' horizontal showsHorizontalScrollIndicator={false}>
          {
            FoodType.map((item, index) => (
              <TouchableOpacity onPress={() => handelChange(item)} activeOpacity={0.8} key={index} className='pr-10 p-2 flex flex-row items-center gap-5  mr-5 rounded-full' style={{ backgroundColor: foodType == item ? "#FFD27C" : null }}    >
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