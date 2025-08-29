import { View, Text, Image, TouchableOpacity, Linking, Platform, StyleSheet, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'
import FIcon from '../../icon/FIcon'
import MapView, { Marker } from 'react-native-maps'

const ShowProBottmSheet = ({ vender, setModalImage }: any) => {
  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const locationPath = {
    latitude: vender?.User_Address.latitude || 30.375321,
    longitude: vender?.User_Address.longitude || 78.031999,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }

  const mapLinking = () => {
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${locationPath.latitude},${locationPath.longitude}`;
    const label = vender?.User_Address?.address || 'Vendor Location';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });

    if (url) {
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          const webUrl = `https://www.google.com/maps/search/?api=1&query=${latLng}`;
          Linking.openURL(webUrl);
        }
      }).catch(err => console.error('An error occurred', err));
    }
  }

  const phoneLinking = () => {
    const phoneNumber = vender?.User_Phone_Number;
    if (phoneNumber) {
      const url = `tel:${phoneNumber}`;
      Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }
  }

  const emailLinking = () => {
    const email = vender?.User_Email;
    if (email) {
      const url = `mailto:${email}`;
      Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }
  }

  if (!vender) return null;

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }]
      }}
      className='flex-1'
    >
      <View className='flex-1 w-full flex gap-4 relative bg-white rounded-t-3xl p-4 shadow-lg'>
        {/* Header with profile image and info */}
        <View className='flex-row gap-4 w-full flex items-center bg-gray-50 p-3 rounded-2xl shadow-sm'>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {
            setModalImage({
              status: true,
              img: vender.User_Image
            })
          }}>
            <Image
              source={{ uri: vender.User_Image }}
              className='rounded-full h-24 w-24 border-2 border-orange-400'
              resizeMode='cover'
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View className='flex-1 justify-center gap-1'>
            <Text className='text-xl font-bold text-gray-800'>{vender.User_Name}</Text>

            <TouchableOpacity onPress={phoneLinking} className='flex-row items-center gap-2 mt-1 bg-blue-50 p-2 rounded-lg'>
              <FIcon name='phone' size={16} color='#3b82f6' />
              <Text className='text-blue-700 font-medium'>{vender.User_Phone_Number}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={emailLinking} className='flex-row items-center gap-2 mt-1 bg-red-50 p-2 rounded-lg'>
              <FIcon name='envelope' size={16} color='#ef4444' />
              <Text className='text-red-700 font-medium text-wrap'>{vender.User_Email}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Address section */}
        <View className='w-full bg-orange-50 p-3 rounded-2xl'>
          <View className='flex-row items-center gap-2 mb-1'>
            <FIcon name='location-dot' size={18} color='#f97316' />
            <Text className='font-bold text-gray-800'>Address</Text>
          </View>
          <Text className='text-gray-600 pl-6'>{vender.User_Address.address}</Text>
        </View>

        {/* Map section */}
        <View className='w-full'>
          <Text className='text-xl font-bold text-gray-800 mb-2'>Location</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={mapLinking}
            className='rounded-2xl overflow-hidden shadow-md'
          >
            <MapView
              region={locationPath}
              style={{ width: '100%', aspectRatio: 1.5 }}
              showsUserLocation={true}
              showsMyLocationButton={true}
              showsCompass={true}
              userInterfaceStyle='dark'
              loadingIndicatorColor='orange'
              loadingEnabled={true}
              scrollEnabled={false}
            >
              {vender?.User_Address && (
                <Marker
                  coordinate={{
                    latitude: vender?.User_Address.latitude,
                    longitude: vender?.User_Address.longitude,
                  }}
                  title={vender.User_Name}
                  description={vender.User_Address.address}
                >
                  <View className="bg-orange-500 p-2 rounded-full border-2 border-white">
                    <FIcon name='location-dot' size={16} color='white' />
                  </View>
                </Marker>
              )}
            </MapView>
            <View className='absolute bottom-3 right-3 bg-white px-3 py-2 rounded-lg shadow-sm'>
              <Text className='text-sm font-medium text-gray-700'>Open in Maps</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='w-full flex items-center justify-center mt-2'>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={phoneLinking}
            className='w-full bg-orange-500 h-14 p-3 rounded-2xl flex-row items-center justify-center shadow-sm'
          >
            <View className='flex-row items-center gap-2'>
              <Text className='text-lg font-semibold text-white'>Contact Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  profileImage: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  contactButton: {
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  }
});

export default ShowProBottmSheet