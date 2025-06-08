import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
    NativeAd,
    NativeAdView,
    NativeAsset,
    NativeAssetType,
    NativeMediaView,
} from 'react-native-google-mobile-ads';
import { TestIds } from 'react-native-google-mobile-ads';
import { useNavigation } from '@react-navigation/native';

const NativeAds = () => {
    const [nativeAd, setNativeAd] = useState<NativeAd | null>(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const adUnitId = __DEV__
        ? TestIds.NATIVE
        : 'ca-app-pub-6357576702874785/4482273081'; // ✅ Change to your live AdMob ID for production

    useEffect(() => {
        NativeAd.createForAdRequest(adUnitId, {
            requestNonPersonalizedAdsOnly: true,
            keywords: ['food', 'tiffin', 'delivery'],
        })
            .then((ad) => {
                setNativeAd(ad);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error loading native ad:', error);
                setLoading(false);
            });
    }, []);

    if (loading || !nativeAd) {
        return (
            <View className="bg-white p-4 rounded-3xl shadow-md mb-6 w-full">
                <View className="bg-gray-200 h-44 rounded-2xl" />
                <View className="mt-4 h-5 bg-gray-300 w-3/4 rounded-md" />
                <View className="mt-2 h-4 bg-gray-200 w-1/2 rounded-md" />
                <View className="mt-3 h-10 bg-gray-300 w-24 rounded-xl" />
                <Text className="text-sm text-gray-400 mt-2">Loading Ad...</Text>
            </View>
        );
    }


    return (
        <TouchableOpacity activeOpacity={0.9} className="w-full mb-6">
            <NativeAdView
                nativeAd={nativeAd}
                style={{ borderRadius: 24, backgroundColor: 'white', padding: 14 }}
            >
                <NativeMediaView
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: 180,
                        borderRadius: 20,
                        marginBottom: 12,
                        backgroundColor: '#f1f1f1',
                    }}
                />

                <NativeAsset assetType={NativeAssetType.HEADLINE}>
                    <Text className="text-lg font-semibold text-gray-900">{nativeAd.headline}</Text>
                </NativeAsset>

                <NativeAsset assetType={NativeAssetType.BODY}>
                    <Text className="text-gray-700 mt-1">{nativeAd.body}</Text>
                </NativeAsset>

                <NativeAsset assetType={NativeAssetType.CALL_TO_ACTION}>
                    <View className="mt-4">
                        <Text className="bg-blue-600 text-white text-center py-2 px-4 rounded-xl text-sm font-medium">
                            {nativeAd.callToAction}
                        </Text>
                    </View>
                </NativeAsset>
            </NativeAdView>
        </TouchableOpacity>
    );
};

export default NativeAds;
