import React from 'react'
import { View, ScrollView } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

const SearchTopSclaton = () => {
    return (
        <View className="w-full py-2 gap-4">
            {/* Title */}
            <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{ height: 24, width: 220, borderRadius: 6, marginLeft: 8 }}
            />

            {/* Grid container */}
            <View className="w-full flex flex-row flex-wrap justify-center gap-4 px-2">
                {[...Array(4)].map((_, index) => (
                    <View
                        key={index}
                        className="w-[45%] rounded-2xl mb-3 overflow-hidden bg-white shadow-lg"
                        style={{
                            elevation: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                        }}
                    >
                        {/* Image placeholder */}
                        <ShimmerPlaceHolder
                            LinearGradient={LinearGradient}
                            style={{ height: 160, width: '100%' }}
                        />

                        {/* Stats overlay (fake shimmer blocks) */}
                        <View className="absolute bottom-4 right-4 flex-row gap-3">
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 18, width: 60, borderRadius: 12 }}
                            />
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 18, width: 60, borderRadius: 12 }}
                            />
                        </View>

                        {/* Content section */}
                        <View className="w-full px-3 py-3 space-y-2">
                            {/* Title line */}
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 16, width: '70%', borderRadius: 4 }}
                            />
                            {/* Divider */}
                            <ShimmerPlaceHolder
                                LinearGradient={LinearGradient}
                                style={{ height: 6, width: 50, borderRadius: 3 }}
                            />
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default SearchTopSclaton
