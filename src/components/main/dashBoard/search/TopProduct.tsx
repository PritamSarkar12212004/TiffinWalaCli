import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../types/navigation'

const TopProduct = ({ top3Product }: any) => {
    const navigation = useNavigation<NavigationProp>()
    const navigationScreen = (item: any) => {
        navigation.navigate('ShowmMainProductScreen', {
            item: item
        })
    }
    return (
        <View className='w-full flex gap-4 py-2'>
            <Text className='text-xl font-bold text-[#333333] px-2'>
                Top 10 Mess in your area
            </Text>
            <View className='w-full flex flex-row gap-4 items-center justify-center flex-wrap'>
                {
                    top3Product.map((item: any, index: any) => (
                        <TouchableOpacity
                            onPress={(() => navigationScreen(item))}
                            activeOpacity={0.9}
                            key={index}
                            className='w-[45%] bg-white mb-3 rounded-2xl flex gap-1 overflow-hidden shadow-lg'
                            style={{
                                elevation: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                            }}
                        >
                            {/* Image container with gradient overlay */}
                            <View className='relative'>
                                <Image
                                    source={{ uri: item.postCoverImage[0] }}
                                    className='w-full h-40 rounded-t-2xl'
                                    resizeMode='cover'
                                />
                                {/* Likes and views on image */}
                                <View className='absolute bottom-2 right-2 flex flex-row gap-3 bg-black/30 px-2 py-1 rounded-full'>
                                    <View className='flex flex-row items-center gap-1'>
                                        <FIcon name='heart' size={16} color='#ff4757' />
                                        <Text className='text-white font-medium'>{item.productLikes.length}</Text>
                                    </View>
                                    <View className='flex flex-row items-center gap-1'>
                                        <FIcon name='eye' size={16} color='#ffa502' />
                                        <Text className='text-white font-medium'>{item.postTotalViews}</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Content container */}
                            <View className='w-full flex gap-1 px-3 py-3'>
                                <Text className='text-base font-bold text-[#333333] tracking-wide' numberOfLines={1}>
                                    {item.postTitle}
                                </Text>
                                {/* Add a subtle divider */}
                                <View className='w-12 h-1 bg-orange-500 rounded-full my-1'></View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default TopProduct