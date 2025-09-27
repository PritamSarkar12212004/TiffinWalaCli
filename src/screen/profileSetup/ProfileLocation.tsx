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
    const [location, setLocation] = useState<any>(null);
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
                style={{ flex: 1 }}
            >
                <MapView
                    region={region}
                    style={{ flex: 1, width: '100%', height: 400 }}
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
                <Text className="text-center text-sm text-zinc-600 mt-4 px-6">
                    {location?.address ?? '📍 Tap below to fetch your current location'}
                </Text>
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
                        Tiffin Wala only accesses your location while using the app for better delivery accuracy.
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProfileLocation;
