import { View, Text } from 'react-native';
import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const SearchSclaton = () => {
    return (
        <View className="w-full flex gap-4 p-4">
            {/* Welcome Text */}
            <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{ height: 20, width: 150, borderRadius: 6 }}
            />

            {/* Search Bar Skeleton */}
            <View className="w-full">
                <View className="w-full bg-[#A0A5BA] h-16 gap-4 rounded-3xl flex flex-row px-5 items-center">
                    <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            backgroundColor: '#fff',
                        }}
                    />
                    <ShimmerPlaceHolder
                        LinearGradient={LinearGradient}
                        style={{ height: 20, width: '60%', borderRadius: 6 }}
                    />
                </View>
            </View>
        </View>
    );
};

export default SearchSclaton;
