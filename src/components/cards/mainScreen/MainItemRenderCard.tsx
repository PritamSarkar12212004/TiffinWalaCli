import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';



const MainItemRenderCard = ({ item }: any) => {
  return (
    <View className="mb-5 w-full">
      <TouchableOpacity
        activeOpacity={0.9}
        className="overflow-hidden rounded-2xl bg-gray-900 w-full"
      >
        {/* Image */}
        <Image
          source={{ uri: item.postCoverImage[0] }}
          className="w-full h-64"
          resizeMode="cover"
        />

        {/* Content */}
        <View className="p-5">
          {/* Title */}
          <Text className="text-white text-xl font-bold mb-1" numberOfLines={1}>
            {item.postTitle}
          </Text>

          {/* Location */}
          <Text className="text-zinc-400 text-sm mb-3" numberOfLines={1}>
            {item.postLocation}
          </Text>

          {/* Meal Types */}
          <View className="flex-row flex-wrap gap-2 mb-5">
            {item.postMealTypes.map((mealType: string, index: number) => (
              <View key={index} className="bg-zinc-800/80 px-3 py-1.5 rounded-full">
                <Text className="text-zinc-300 text-xs font-medium">{mealType}</Text>
              </View>
            ))}
          </View>

          {/* View Menu Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-yellow-400 py-3.5 rounded-xl items-center"
          >
            <Text className="text-black font-bold text-base">View Menu</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainItemRenderCard;
