import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FIcon from '../../../../layout/icon/FIcon';
import { userContext } from '../../../../utils/context/ContextProvider';

const DashBoardCard = ({ item, navigation }: any) => {
    const { addCountry, setAddCountry } = userContext();

    const navigationScreen = () => {
        if (addCountry == 3) {
            navigation.navigate('RewardedAdd' as never);
            setAddCountry(0);
        } else {
            navigation.navigate('ShowmMainProductScreen', { item });
            setAddCountry(addCountry + 1);
        }
    };

    return (
        <TouchableOpacity
            onPress={navigationScreen}
            activeOpacity={0.95}
            className="mb-6 rounded-3xl bg-white shadow-lg overflow-hidden"
        >
            {/* Cover Image */}
            <View className="w-full h-72">
                {item?.postCoverImage?.[0] && (
                    <Image
                        source={{ uri: item.postCoverImage[0] }}
                        resizeMode="cover"
                        className="w-full h-full"
                    />
                )}
            </View>

            {/* Likes, Views, Distance */}
            <View className="px-4 pt-4 flex gap-2 flex-row justify-between items-center">
                <View className="flex-row items-center flex gap-3">
                    <View className='flex flex-row gap-1'>
                        <FIcon name="heart" size={16} color="#FF7622" />
                        <Text className="text-sm text-gray-800">{item?.productLikes?.length || 0}</Text>
                    </View>
                    <View className='flex flex-row gap-1'>
                        <FIcon name="eye" size={16} color="#FF7622" />
                        <Text className="text-sm text-gray-800">{item?.postTotalViews || 0}</Text>
                    </View>
                </View>
                <View className="flex-row items-center gap-1">
                    <FIcon name="location-dot" size={16} color="#FF7622" />
                    <Text className="text-sm text-gray-800">
                        {item?.distanceText || `${item?.distance || 0} km`}
                    </Text>
                </View>
            </View>

            {/* Details */}
            <View className="p-4 pt-2 flex gap-2">
                {/* Title */}
                <Text className="text-xl font-bold text-gray-900 truncate">
                    {item?.postTitle || 'Untitled'}
                </Text>

                {/* Description */}
                <Text className="text-sm text-gray-600" numberOfLines={2}>
                    {item?.postDescription}
                </Text>

                {/* Location */}
                <Text className="text-sm text-gray-500 flex-row items-center">
                    📍 {item?.postLocation || 'Unknown Location'}
                </Text>

                {/* Price */}
                <Text className="text-xl text-green-700 font-semibold">
                    ₹{item?.postPrice}/<Text className="text-sm">month</Text>
                </Text>

                {/* Food Types */}
                {item?.postFoodType?.length > 0 && (
                    <View className="flex-row flex-wrap gap-2">
                        {item.postFoodType.map((type: string, index: number) => (
                            <View
                                key={index}
                                className={`flex-row items-center px-2 py-1 rounded-full ${type === 'Veg'
                                    ? 'bg-green-100'
                                    : type === 'Non-Veg'
                                        ? 'bg-red-100'
                                        : 'bg-yellow-100'
                                    }`}
                            >
                                <FIcon
                                    name={
                                        type === 'Veg'
                                            ? 'leaf'
                                            : type === 'Non-Veg'
                                                ? 'drumstick-bite'
                                                : 'seedling'
                                    }
                                    size={14}
                                    color={
                                        type === 'Veg'
                                            ? 'green'
                                            : type === 'Non-Veg'
                                                ? 'red'
                                                : 'orange'
                                    }
                                />
                                <Text className="text-xs ml-1 text-gray-800">{type}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Meal Types */}
                {item?.postMealTypes?.length > 0 && (
                    <View className="flex-row flex-wrap gap-2 mt-2">
                        {item.postMealTypes.map((type: string, index: number) => (
                            <Text
                                key={index}
                                className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                            >
                                🍽️ {type}
                            </Text>
                        ))}
                    </View>
                )}

                {/* Valid Days */}
                {item?.postValidDay?.length > 0 && (
                    <Text className="text-xs text-gray-500 mt-2">
                        ✅ Available on: {item.postValidDay.join(', ')}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default DashBoardCard;
