import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavigationProfile from '../../../../components/main/profile/navigation/NavigationProfile'
import useLikeProductApi from '../../../../hooks/main/profile/useLikeProductApi'
import { userContext } from '../../../../utils/context/ContextProvider'
import useControllLike from '../../../../hooks/main/dashboard/controller/useControllLike'

const FeviroteProductScreen = () => {
    const { userInfo } = userContext()
    const { likeController } = useLikeProductApi()
    const [list, setList] = useState<any>(null)
    const [feviroteProduct, setIsFavorite] = useState<any>([])

    const { likeControllers } = useControllLike()
    const removeItom = (id: any) => {
        likeControllers(userInfo.userinfo._id, id, feviroteProduct, setIsFavorite)
        const newList = list.filter((item) => item._id !== id)
        setList(newList)
    }

    useEffect(() => {
        likeController(userInfo.userinfo._id, setList)
    }, [])

    return (
        <View className='flex-1 bg-[#F3F3F3] px-3 pt-2'>
            <View className='flex-1'>
                <NavigationProfile path='Favorite' option='' func={() => { }} />
                {
                    list ? list.error ? <View className='flex-1 flex items-center justify-center'>
                        <Text className='text-red-500 text-2xl font-bold'>{list.error}</Text>
                    </View> : <View className='flex-1 pt-5'>
                        <FlatList
                            data={list}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View
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
                                                    : item.postDescription}
                                            </Text>
                                        </View>

                                        {/* Stats row */}
                                        <View className='flex-row justify-between items-center mt-2'>
                                            <TouchableOpacity
                                                onPress={() => removeItom(item._id)}
                                                activeOpacity={0.8}
                                                className='bg-red-500 rounded-lg px-2 py-1'
                                            >
                                                <Text className='text-white text-xs font-bold'>Remove</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View> : null
                }

            </View>

        </View>
    )
}

export default FeviroteProductScreen
