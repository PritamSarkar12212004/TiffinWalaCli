import { View, Text, Image } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'

const DashBoardCard = ({ item }: any) => {
    return (
        <View className='w-full flex gap-3 '>
            <View className='w-full  h-72 bg-[#98A8B8] rounded-3xl'>
                <Image source={{ uri: item.postCoverImage[0] }} resizeMode='cover' className='w-full h-full rounded-3xl' />
            </View>
            <View className='w-full flex gap-1'>
                <Text className='text-xl'>Rose garden restaurant</Text>
                <Text className='text-lg text-zinc-500'>Burger - Chiken - Riche - Wings </Text>
            </View>
            <View className='w-full flex  items-start flex-row gap-8 '>
                <View className='flex flex-row items-center justify-center gap-2'>
                    <FIcon name='heart' color='#FF7622' size={20} />
                    <Text className=' font-semibold'>4.5</Text>
                </View>
                <View className='flex flex-row items-center justify-center gap-2'>
                    <FIcon name='eye' color='#FF7622' size={20} />
                    <Text className=' font-semibold'>500</Text>
                </View>
                <View className='flex flex-row items-center justify-center gap-2'>
                    <FIcon name='location-dot' color='#FF7622' size={20} />
                    <Text className=' font-semibold'>3.5 KM</Text>
                </View>
            </View>
        </View>
    )
}

export default DashBoardCard