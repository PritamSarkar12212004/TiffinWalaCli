import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShowProBottmSheetSclotan = () => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View className='flex-1'>
            <View className='flex-1 w-full gap-4 relative bg-white rounded-t-3xl p-4 shadow-lg'>
                {/* Header Section Skeleton */}
                <View className='flex-row gap-4 w-full items-center bg-gray-50 p-3 rounded-2xl shadow-sm'>
                    {/* Profile Image Skeleton */}
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.profileImage}
                    />
                    {/* Info Skeleton */}
                    <View className='flex-1 gap-2'>
                        <ShimmerPlaceholder
                            LinearGradient={LinearGradient}
                            style={{ height: 18, width: '70%', borderRadius: 4 }}
                        />
                        <ShimmerPlaceholder
                            LinearGradient={LinearGradient}
                            style={{ height: 16, width: '60%', borderRadius: 4 }}
                        />
                        <ShimmerPlaceholder
                            LinearGradient={LinearGradient}
                            style={{ height: 16, width: '80%', borderRadius: 4 }}
                        />
                    </View>
                </View>

                {/* Address Skeleton */}
                <View className='w-full bg-orange-50 p-3 rounded-2xl gap-2'>
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={{ height: 16, width: '30%', borderRadius: 4 }}
                    />
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={{ height: 14, width: '90%', borderRadius: 4 }}
                    />
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={{ height: 14, width: '60%', borderRadius: 4 }}
                    />
                </View>

                {/* Map Skeleton */}
                <View className='w-full'>
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={{ height: screenWidth * 0.6, borderRadius: 12 }}
                    />
                </View>

                {/* Contact Now Button Skeleton */}
                <View className='w-full items-center justify-center mt-2'>
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.contactButton}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileImage: {
        height: 96,
        width: 96,
        borderRadius: 48,
    },
    contactButton: {
        height: 60,
        width: '100%',
        borderRadius: 16,
    },
});

export default ShowProBottmSheetSclotan;
