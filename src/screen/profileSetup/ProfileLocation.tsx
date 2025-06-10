import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import SetproButton from '../../components/setProfile/buttons/SetproButton';
import AuthPupup from '../../layout/popUp/AuthPupup';
import { userContext } from '../../utils/context/ContextProvider';

const ProfileLocation = () => {
    const { tempPhomne } = userContext();
    const [location, setLocation] = useState(null);
    const [popUp, setPopUp] = useState({
        isVisible: false,
        message: '',
    });

    const region = location
        ? {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }
        : {
            latitude: 21.146633,
            longitude: 79.08886,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-[#FFF3E0]"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={80}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <AuthPupup popUp={popUp} setPopUp={setPopUp} />

                {/* 🔲 Header */}
                <View className="items-center justify-center mt-10 mb-4">
                    <Text className="text-[#FF7622] text-3xl font-extrabold">Set Your Location 📍</Text>
                    <Text className="text-[#333] text-sm mt-1 text-center">
                        Enable precise delivery and accurate service experience
                    </Text>
                </View>

                {/* 🗺️ Map Container */}
                <View className="items-center mt-4 mb-6">
                    <View className="w-72 h-96 bg-zinc-600 rounded-[60px] overflow-hidden shadow-xl">
                        <MapView
                            region={region}
                            style={{ width: '100%', height: '100%' }}
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                            showsCompass={true}
                            userInterfaceStyle="dark"
                            scrollEnabled={false}
                            loadingEnabled={true}
                            loadingIndicatorColor="orange"
                        >
                            {location && (
                                <Marker
                                    coordinate={{
                                        latitude: location.latitude,
                                        longitude: location.longitude,
                                    }}
                                    title="Your Location"
                                    description="This is your current location"
                                />
                            )}
                        </MapView>
                    </View>

                    <Text className="text-center text-sm text-zinc-600 mt-4 px-6">
                        {location?.address ?? '📍 Tap below to fetch your current location'}
                    </Text>
                </View>

                {/* 🔘 Button Section */}
                <View className="px-6 pb-10 pt-4 items-center gap-6">
                    <SetproButton
                        tempPhomne={tempPhomne}
                        setPopUp={setPopUp}
                        locationget={location}
                        setLocation={setLocation}
                        content="Access Location"
                        icon="location-dot"
                    />

                    <Text className="text-center text-xs text-zinc-500 tracking-wider leading-5 px-3 font-medium">
                        DFOOD only accesses your location while using the app for better delivery accuracy.
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProfileLocation;
