import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const DistanceCateDashSclaton = () => {
    return (
        <View className="w-full flex">
            <View className="w-full flex flex-row items-center justify-between">
                <ShimmerPlaceHolder
                    LinearGradient={LinearGradient}
                    style={{ height: 20, width: 120, borderRadius: 6 }}
                />
            </View>

            <View className="w-full flex flex-row">
                <ScrollView className="w-full flex py-3" horizontal showsHorizontalScrollIndicator={false}>
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <View
                            key={index}
                            className="p-2 flex flex-row items-center gap-5 mr-5 rounded-3xl"
                            style={{ backgroundColor: '#f0f0f0' }}
                        >
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{
                                    height: 64,
                                    width: 64,
                                    borderRadius: 32,
                                    backgroundColor: '#fff',
                                }}
                            />
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 18, width: 80, borderRadius: 6 }}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default DistanceCateDashSclaton;
