import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const ShowProductSclotan = () => {
    return (
        <View style={styles.container}>
            <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false}>
                <View className='flex-1 bg-white relative gap-8'>
                    {/* Navigation Skeleton */}
                    <View className='w-full px-4 pt-4 pb-3 flex-row justify-between items-center'>
                        <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{ height: 24, width: 24, borderRadius: 12 }}
                        />
                        <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{ height: 24, width: 24, borderRadius: 12 }}
                        />
                    </View>

                    {/* Image Carousel Skeleton */}
                    <View className='w-full flex relative rounded-b-3xl gap-3 pb-5'>
                        <View className='w-full h-96 bg-gray-200 rounded-b-3xl overflow-hidden'>
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ width, height: 384 }}
                            />
                        </View>
                        <View className='absolute bottom-4 w-full flex flex-row justify-center gap-1'>
                            {[1, 2, 3].map((_, index) => (
                                <ShimmerPlaceHolder
                                    key={index}
                                    LinearGradient={LinearGradient}
                                    style={{
                                        height: 8,
                                        width: 8,
                                        borderRadius: 4,
                                        marginHorizontal: 2
                                    }}
                                />
                            ))}
                        </View>
                    </View>

                    {/* Content Area */}
                    <View className='w-full px-4 flex gap-8'>
                        {/* Title and Follow Button */}
                        <View className='w-full flex gap-2'>
                            <View className='w-full flex flex-row items-center justify-between'>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 28, width: '60%', borderRadius: 6 }}
                                />
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 36, width: 100, borderRadius: 18 }}
                                />
                            </View>
                            <View className='w-full flex flex-row gap-2 items-center'>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 16, width: 16, borderRadius: 8 }}
                                />
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 16, width: '70%', borderRadius: 6 }}
                                />
                            </View>
                        </View>

                        {/* Stats Section */}
                        <View className='w-full flex flex-row items-center justify-between'>
                            <View className='flex flex-row gap-3'>
                                {[1, 2, 3].map((_, index) => (
                                    <ShimmerPlaceHolder
                                        key={index}
                                        LinearGradient={LinearGradient}
                                        style={{ height: 28, width: 60, borderRadius: 14 }}
                                    />
                                ))}
                            </View>
                            <View className='flex flex-row items-center justify-center gap-2'>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 20, width: 20, borderRadius: 10 }}
                                />
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 24, width: 80, borderRadius: 6 }}
                                />
                            </View>
                        </View>

                        {/* Description Skeleton */}
                        <View className='w-full gap-2'>
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 16, width: '100%', borderRadius: 6 }}
                            />
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 16, width: '90%', borderRadius: 6 }}
                            />
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 16, width: '80%', borderRadius: 6 }}
                            />
                        </View>

                        {/* Food Type Skeleton */}
                        <View className='w-full flex'>
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 24, width: 100, borderRadius: 6, marginBottom: 12 }}
                            />
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View className='flex flex-row gap-3'>
                                    {[1, 2, 3].map((_, index) => (
                                        <View key={index} className='flex-row items-center gap-3 mr-3'>
                                            <ShimmerPlaceHolder
                                                LinearGradient={LinearGradient}
                                                style={{ height: 44, width: 44, borderRadius: 22 }}
                                            />
                                            <ShimmerPlaceHolder
                                                LinearGradient={LinearGradient}
                                                style={{ height: 20, width: 60, borderRadius: 6 }}
                                            />
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        </View>

                        {/* Available Days Skeleton */}
                        <View className='w-full flex gap-3'>
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 24, width: 140, borderRadius: 6 }}
                            />
                            <View className='w-full flex flex-row flex-wrap gap-3'>
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                    <ShimmerPlaceHolder
                                        key={index}
                                        LinearGradient={LinearGradient}
                                        style={{ height: 32, width: 80, borderRadius: 16 }}
                                    />
                                ))}
                            </View>
                        </View>

                        {/* Food Menu Skeleton */}
                        <View className='w-full flex gap-2'>
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 24, width: 100, borderRadius: 6 }}
                            />
                            <View className='w-full flex gap-3'>
                                {[1, 2].map((_, index) => (
                                    <ShimmerPlaceHolder
                                        key={index}
                                        LinearGradient={LinearGradient}
                                        style={{ height: 150, width: '100%', borderRadius: 16 }}
                                    />
                                ))}
                            </View>
                        </View>

                        {/* Contact Button Skeleton */}
                        <View className='w-full flex'>
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 56, width: '100%', borderRadius: 28 }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Sheet Skeleton */}
            <View style={[StyleSheet.absoluteFillObject, { top: '100%' }]}>
                <View className='flex-1 bg-white p-4'>
                    <View className='flex-row items-center gap-4 mb-6'>
                        <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{ height: 80, width: 80, borderRadius: 40 }}
                        />
                        <View className='flex-1 gap-2'>
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 20, width: '60%', borderRadius: 6 }}
                            />
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 16, width: '40%', borderRadius: 6 }}
                            />
                        </View>
                    </View>

                    <View className='gap-4'>
                        {[1, 2, 3].map((_, index) => (
                            <View key={index} className='flex-row items-center gap-3'>
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 24, width: 24, borderRadius: 12 }}
                                />
                                <ShimmerPlaceHolder
                                    LinearGradient={LinearGradient}
                                    style={{ height: 18, width: '70%', borderRadius: 6 }}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default ShowProductSclotan;