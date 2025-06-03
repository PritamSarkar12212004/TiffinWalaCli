import { View, Text } from 'react-native'
import React from 'react'

const NoProfileDataFound = ({ message }: any) => {
  return (
    <View className='flex-1 flex items-center justify-center'>
      <Text className='text-xl font-bold tracking-widest text-center'>
        {
          message.message
        }
      </Text>
    </View>
  )
}

export default NoProfileDataFound