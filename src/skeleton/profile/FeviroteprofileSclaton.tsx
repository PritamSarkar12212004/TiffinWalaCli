import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const FeviroteprofileSclaton = () => {
    const width = Dimensions.get('window').width;

    return (
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
            {/* Left Image Placeholder */}
            <ShimmerPlaceholder
                LinearGradient={LinearGradient}
                style={styles.imageBox}
            />

            {/* Right Content Placeholder */}
            <View className='flex-1 p-3 justify-between gap-2'>
                {/* Title */}
                <ShimmerPlaceholder
                    LinearGradient={LinearGradient}
                    style={{ height: 18, width: '70%', borderRadius: 4 }}
                />

                {/* Description Lines */}
                <ShimmerPlaceholder
                    LinearGradient={LinearGradient}
                    style={{ height: 14, width: '90%', borderRadius: 4 }}
                />
                <ShimmerPlaceholder
                    LinearGradient={LinearGradient}
                    style={{ height: 14, width: '60%', borderRadius: 4 }}
                />

                {/* Remove Button */}
                <View className='flex-row justify-between items-center mt-2'>
                    <ShimmerPlaceholder
                        LinearGradient={LinearGradient}
                        style={styles.removeButton}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBox: {
        height: 112, // h-28
        width: 128,  // w-32
        borderRadius: 4,
    },
    removeButton: {
        height: 24,
        width: 80,
        borderRadius: 6,
    },
});

export default FeviroteprofileSclaton;
