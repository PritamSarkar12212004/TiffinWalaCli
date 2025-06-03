import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'

const DashBoardCard = ({ item }: any) => {
    const navigation = useNavigation()
    const navigationScreen = () => {
        navigation.navigate('ShowmMainProductScreen', {
            item: item
        })
    }
    return (
        <TouchableOpacity onPress={() => navigationScreen()} activeOpacity={0.8} className='w-full flex gap-3 '>
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
                    <Text className=' font-semibold'>{item.productLikes.length}</Text>
                </View>
                <View className='flex flex-row items-center justify-center gap-2'>
                    <FIcon name='eye' color='#FF7622' size={20} />
                    <Text className=' font-semibold'>{item.postTotalViews}</Text>
                </View>
                <View className='flex flex-row items-center justify-center gap-2'>
                    <FIcon name='location-dot' color='#FF7622' size={20} />
                    <Text className=''>{item.distance} km</Text>
                </View>
                <View className='flex flex-row items-center justify-center gap-2'>
                    {
                        item.postFoodType.map((item, index) => {
                            return (
                                <View key={index} className='p-1 rounded-full bg-gray-300 rounded-full'>
                                    <FIcon name={item == 'Veg' ? 'leaf' : item == 'Non-Veg' ? 'egg' : 'seedling'} color={item == 'Veg' ? 'green' : item == 'Non-Veg' ? 'red' : 'green'} size={15} />
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DashBoardCard