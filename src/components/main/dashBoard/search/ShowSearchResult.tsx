import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'

const ShowSearchResult = ({ item }: any) => {
    const navigation = useNavigation()
    const navigationScreen = (item: any) => {
        navigation.navigate('ShowmMainProductScreen', {
            item: item
        })
    }
    return (
        <View className='w-full flex gap-4 py-2'>
            {
                item.map((item: any, index: any) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigationScreen(item)} 
                            activeOpacity={0.9} 
                            key={index} 
                            className='flex-row w-full mb-3 bg-white rounded-xl overflow-hidden'
                            style={{
                                elevation: 3,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 3,
                            }}
                        >
                            {/* Left image with gradient overlay */}
                            <View className='h-28 w-32 bg-[#f0f0f0]'>
                                <Image 
                                    source={{ uri: item.postCoverImage[0] }} 
                                    className='h-full w-full' 
                                    resizeMode='cover' 
                                />
                                {/* Image tag overlay */}
                                <View className='absolute top-0 left-0 bg-orange-500 px-2 py-1 rounded-br-lg'>
                                    <Text className='text-white text-xs font-bold'>FOOD</Text>
                                </View>
                            </View>
                            
                            {/* Content container */}
                            <View className='flex-1 p-3 justify-between'>
                                {/* Title and description */}
                                <View className='gap-1'>
                                    <Text className='text-[#333333] text-lg font-bold' numberOfLines={1}>
                                        {item.postTitle}
                                    </Text>
                                    <Text className='text-[#666666] text-sm font-medium' numberOfLines={2}>
                                        {item.postDescription.length > 30
                                            ? `${item.postDescription.substring(0, 30)}...`
                                            : item.postDescription
                                        }
                                    </Text>
                                </View>
                                
                                {/* Stats row */}
                                <View className='flex-row justify-between items-center mt-2'>
                                    {/* Left stats */}
                                    <View className='flex-row gap-3'>
                                        <View className='flex-row items-center gap-1'>
                                            <FIcon name='heart' color='#ff4757' size={16} />
                                            <Text className='text-[#555555] text-sm font-semibold'>{item.productLikes.length}</Text>
                                        </View>
                                        <View className='flex-row items-center gap-1'>
                                            <FIcon name='location-dot' color='#ffa502' size={16} />
                                            <Text className='text-[#555555] text-sm font-semibold'>{item.distance}km</Text>
                                        </View>
                                    </View>
                                    
                                    {/* View details button */}
                                    <View className='bg-[#f0f0f0] rounded-full px-2 py-1'>
                                        <Text className='text-[#555555] text-xs font-bold'>VIEW</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default ShowSearchResult