import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'

const DashBoardCard = ({ item }: any) => {
    const navigation = useNavigation()

    const navigationScreen = () => {
        navigation.navigate('ShowmMainProductScreen', { item })
    }

    return (
        <TouchableOpacity
            onPress={navigationScreen}
            activeOpacity={0.9}
            className="w-full mb-6"
        >
            <View className="w-full h-72 bg-gray-300 rounded-3xl overflow-hidden">
                {item?.postCoverImage?.[0] && (
                    <Image
                        source={{ uri: item.postCoverImage[0] }}
                        resizeMode="cover"
                        className="w-full h-full"
                    />
                )}
            </View>

            <View className="mt-3 px-1 space-y-1">
                <Text className="text-xl font-semibold text-gray-800">
                    {item?.postTitle || 'Untitled'}
                </Text>
                
            </View>

            <View className="mt-2 px-1 flex-row flex-wrap items-center gap-x-6 gap-y-2">
                <View className="flex-row items-center gap-1">
                    <FIcon name="heart" color="#FF7622" size={18} />
                    <Text className="text-gray-700">{item?.productLikes?.length || 0}</Text>
                </View>
                <View className="flex-row items-center gap-1">
                    <FIcon name="eye" color="#FF7622" size={18} />
                    <Text className="text-gray-700">{item?.postTotalViews || 0}</Text>
                </View>
                <View className="flex-row items-center gap-1">
                    <FIcon name="location-dot" color="#FF7622" size={18} />
                    <Text className="text-gray-700">{item?.distance || '0'} km</Text>
                </View>
                {item?.postFoodType?.length > 0 && (
                    <View className="flex-row gap-1">
                        {item.postFoodType.map((type, index) => (
                            <View
                                key={index}
                                className="p-1 bg-gray-200 rounded-full"
                            >
                                <FIcon
                                    name={
                                        type === 'Veg'
                                            ? 'leaf'
                                            : type === 'Non-Veg'
                                                ? 'egg'
                                                : 'seedling'
                                    }
                                    size={14}
                                    color={
                                        type === 'Veg'
                                            ? 'green'
                                            : type === 'Non-Veg'
                                                ? 'red'
                                                : 'gray'
                                    }
                                />
                            </View>
                        ))}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default DashBoardCard
