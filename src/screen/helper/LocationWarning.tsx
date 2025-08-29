import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView from 'react-native-maps'
import FIcon from '../../layout/icon/FIcon'
import LinearGradient from 'react-native-linear-gradient'
import { Linking, Platform } from "react-native";


const white3DMapStyle = [
    { "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
    { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
    { "elementType": "labels.text.fill", "stylers": [{ "color": "#8a8a8a" }] },
    { "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] },
    { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f0f0f0" }] },
    { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#d6f1ff" }] }
]
const openLocationSettings = () => {
    if (Platform.OS === "ios") {
        // iOS opens app-specific settings (not global location page directly)
        Linking.openURL("App-Prefs:root=Privacy&path=LOCATION");
        // fallback
        Linking.openURL("app-settings:");
    } else {
        // Android
        Linking.sendIntent("android.settings.LOCATION_SOURCE_SETTINGS");
    }
};
const LocationWarning = () => {

    const mapRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if (mapRef.current) {
                mapRef.current.animateToRegion(
                    {
                        latitude: 21.1458,
                        longitude: 79.0882,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    },
                    2000
                )
            }
        }, 1000)
    }, [])

    return (
        <View className="flex-1 bg-white">
            {/* Map Section */}
            <View style={{ height: '55%' }}>
                <MapView
                    ref={mapRef}
                    style={{ flex: 1, borderRadius: 20 }}
                    customMapStyle={white3DMapStyle}
                    showsBuildings={true}
                    showsCompass={true}
                    scrollEnabled={false}
                    zoomEnabled={false}
                    rotateEnabled={false}
                    pitchEnabled={false}
                    initialRegion={{
                        latitude: 21.1458,
                        longitude: 79.0882,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                    }}
                />
            </View>

            {/* Info + Button Section */}
            <View style={{ height: '45%' }} className="bg-white rounded-t-3xl px-6 py-5 shadow-lg flex items-center justify-between">
                <View className='w-full flex gap-2 '>
                    <Text className="text-3xl font-bold text-orange-400 mb-2">
                        Enable your location
                    </Text>
                    {/* Subtitle */}
                    <Text className="text-base text-gray-600 mb-4">
                        Get the best experience with nearby rooms, tiffins, and services tailored just for you.
                    </Text>

                    <View className="space-y-3 mb-6">
                        <View className="flex flex-row items-center gap-3">
                            <FIcon name="map-marker" size={18} color="#00b894" />
                            <Text className="text-gray-700 text-sm">Discover nearby rooms instantly</Text>
                        </View>
                        <View className="flex flex-row items-center gap-3">
                            <FIcon name="utensils" size={18} color="#00b894" />
                            <Text className="text-gray-700 text-sm">Find local tiffin services around you</Text>
                        </View>
                        <View className="flex flex-row items-center gap-3">
                            <FIcon name="star" size={18} color="#00b894" />
                            <Text className="text-gray-700 text-sm">Personalized recommendations</Text>
                        </View>
                    </View>
                </View>
                {/* Button with Linear Gradient */}
                <TouchableOpacity onPress={() => openLocationSettings()} activeOpacity={0.9} className="w-full h-14 rounded-3xl overflow-hidden">
                    <LinearGradient
                        colors={['#00d47e', '#00b894']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            flex: 1,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 8
                        }}
                    >
                        <FIcon name={'location-arrow'} color={'white'} size={20} />
                        <Text className="text-lg font-semibold text-white">Enable Location</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LocationWarning
