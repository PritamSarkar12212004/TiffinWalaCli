import { View, Text, Image } from 'react-native';
import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const MainCardSkalaton = () => {
    return (
        <View className="w-full mb-6">
            {/* Image Skeleton */}
            <View className="w-full h-72 bg-white rounded-3xl overflow-hidden">
                <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={{ height: '100%', width: '100%' }}
                />
            </View>

            {/* Title Skeleton */}
            <View className="mt-3 px-1 gap-1">
                <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={{ height: 24, width: 150, borderRadius: 6 }}
                />
            </View>

            {/* Stats Skeleton */}
            <View className="mt-2 px-1 flex-row flex-wrap items-center gap-x-6 gap-y-2">
                {[1, 2, 3].map((_, index) => (
                    <View key={index} className="flex-row items-center gap-1">
                        <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{
                                height: 18,
                                width: 18,
                                borderRadius: 9,
                                backgroundColor: '#fff',
                            }}
                        />
                        <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{ height: 14, width: 40, borderRadius: 6 }}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default MainCardSkalaton;
