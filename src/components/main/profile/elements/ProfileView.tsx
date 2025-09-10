import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileView = ({ profileInfo }: any) => {
  return (
    <View className='w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFF0E6] to-[#FFE3D4] p-4 flex flex-row items-center gap-4'>
      <View className='h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/20'>
        <View className='h-[88px] w-[88px] rounded-full bg-[#FFC6AE] overflow-hidden'>
          <Image source={{ uri: profileInfo.User_Image }} className='w-full h-full rounded-full' />
        </View>
      </View>
      <View className='flex-1 flex gap-1'>
        <Text className='text-2xl font-extrabold tracking-wide' numberOfLines={1}>{profileInfo.User_Name}</Text>
        {!!profileInfo?.User_Bio && (
          <Text className='text-base text-black/70' numberOfLines={2}>{profileInfo.User_Bio}</Text>
        )}
      </View>
    </View>
  )
}

export default ProfileView