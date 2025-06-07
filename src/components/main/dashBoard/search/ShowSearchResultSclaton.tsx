import React from 'react';
import { View, ScrollView } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShowSearchResultSclaton = () => {
    return (
        <View className="w-full flex gap-4 py-2">
            {[...Array(4)].map((_, index) => (
                <View
                    key={index}
                    className="flex-row w-full mb-3 bg-white rounded-xl overflow-hidden"
                    style={{
                        elevation: 3,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                    }}
                >
                    {/* Left image */}
                    <View className="h-28 w-32 bg-gray-200">
                        <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{ height: '100%', width: '100%' }}
                        />

                        {/* Category Tag */}
                        <View className="absolute top-0 left-0 px-2 py-1 rounded-br-lg bg-orange-400">
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 14, width: 40, borderRadius: 4 }}
                            />
                        </View>
                    </View>

                    {/* Content */}
                    <View className="flex-1 p-3 justify-between">
                        {/* Title and description */}
                        <View className="gap-2">
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 16, width: '60%', borderRadius: 4 }}
                            />
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 14, width: '90%', borderRadius: 4 }}
                            />
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 14, width: '80%', borderRadius: 4 }}
                            />
                        </View>

                        {/* Stats row */}
                        <View className="flex-row justify-between items-center mt-2">
                            {/* Icons */}
                            <View className="flex-row gap-3">
                                {[1, 2].map((_, idx) => (
                                    <View key={idx} className="flex-row items-center gap-1">
                                        <ShimmerPlaceHolder
                                            LinearGradient={LinearGradient}
                                            style={{ height: 16, width: 16, borderRadius: 8 }}
                                        />
                                        <ShimmerPlaceHolder
                                            LinearGradient={LinearGradient}
                                            style={{ height: 14, width: 30, borderRadius: 4 }}
                                        />
                                    </View>
                                ))}
                            </View>

                            {/* View Button */}
                            <View className="rounded-full px-2 py-1 bg-gray-300">
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 14, width: 40, borderRadius: 7 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default ShowSearchResultSclaton;
