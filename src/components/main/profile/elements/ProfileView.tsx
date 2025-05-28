import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileView = ({ profileInfo }: any) => {
  return (
    <View className='w-full flex flex-row items-center gap-5'>
      <View className='w-40 h-40 rounded-full bg-[#FFC6AE]'>
        <Image source={{ uri: profileInfo.User_Image }} className='w-full h-full rounded-full' />
      </View>
      <View className='flex-wrap flex gap-2'>
        <Text className='text-2xl text-wrap font-bold tracking-widest'>{profileInfo.User_Name}</Text>
        <Text className=' tracking-widest text-lg'>{profileInfo.User_Bio}</Text>
      </View>
    </View>
  )
}

export default ProfileView