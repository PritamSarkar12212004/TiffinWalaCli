import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react';
import SetproButton from '../../components/setProfile/buttons/SetproButton';
import AuthPupup from '../../layout/popUp/AuthPupup';
import { userContext } from '../../utils/context/ContextProvider';
const ProfileLocation = () => {
    const { tempPhomne } = userContext()
    const [location, setLocation] = useState(null);
    const [popUp, setPopUp] = useState<{
        isVisible: boolean;
        message: string;
    }>({
        isVisible: false,
        message: '',
    });
    const region = location
        ? {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005, // Zoomed-in view
            longitudeDelta: 0.005,
        }
        : {
            latitude: 21.146633,
            longitude: 79.08886,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };

    return (
        <View className='flex-1 items-center justify-end gap-5  pb-4 bg-white pb-36 gap-32 '>
            <AuthPupup popUp={popUp} setPopUp={setPopUp} />
            <View className='w-full flex flex items-center justify-center gap-5'>
                <View className="w-72 h-96 bg-zinc-600 rounded-[70px] overflow-hidden">
                    <MapView
                        region={region}
                        style={{ width: '100%', height: '100%' }}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        showsCompass={true}
                        userInterfaceStyle='dark'
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
                <Text className="text-sm  text-zinc-600 text-center px-8">
                    {
                        location ? location.fullAddress : "Set Your Location"
                    }

                </Text>
            </View>

            <View className="px-5 w-full flex items-center gap-10 justify-center">
                <SetproButton tempPhomne={tempPhomne} setPopUp={setPopUp} locationget={location} setLocation={setLocation} content="Access LOCATION" icon="location-dot" />
                <Text className="text-center tracking-widest font-semibold text-zinc-600">
                    DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
                </Text>
            </View>
        </View>
    );
};

export default ProfileLocation;


