import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import LocationHeader from '../../../components/main/location/LocationHeader'
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import CurrentLocationFun from '../../../functions/location/CurrentLocationFun';
import AuthPupup from '../../../layout/popUp/AuthPupup';
import { removeLocation, setLocation } from '../../../functions/Token/PageTokenManagerFun';
import PageToken from '../../../constants/tokens/PageToken';
import { userContext } from '../../../utils/context/ContextProvider';
import GetCurrentLocationByMark from '../../../functions/location/GetCurrentLocationByMark';

const LocationScree = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { location } = route.params;
  const { pageLoader, setPageLoader } = userContext()

  const locationPath =
  {
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.005, // Zoomed-in view
    longitudeDelta: 0.005,
    address: location.address,
  };
  const [getNewLocation, setGetNewLocation] = useState<{
    latitude: any;
    longitude: any;
    address: any
  }>(null);

  const [popUp, setPopUp] = useState<{
    isVisible: boolean;
    message: string;
  }>({
    isVisible: false,
    message: '',
  });
  const [loading, setLoading] = useState(false)

  const setLocationFunc = async () => {
    let remove = removeLocation(PageToken.profile.locationToken);
    if (remove) {
      let set = setLocation(PageToken.profile.locationToken, getNewLocation);
      setPageLoader(!pageLoader)
      if (set) {
        navigation.goBack()
      }
    } else {
      console.log("faild location set")
    }
  }


  return (
    <View className='flex-1 bg-[#F3F3F3] relative '>
      <AuthPupup popUp={popUp} setPopUp={setPopUp} />
      <View className='w-full flex-1 bg-[#D0D9E1]'>
        <LocationHeader />
        <MapView
          region={locationPath}
          style={{ width: '100%', height: '100%' }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          userInterfaceStyle='dark'
          loadingIndicatorColor='orange'
          loadingEnabled={true}
          onPress={async (e) => {
            const { latitude, longitude } = e.nativeEvent.coordinate;
            GetCurrentLocationByMark(setLoading, latitude, longitude, setPopUp, setGetNewLocation)
          }}

        >

          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
            description="This is your current location"
          />
        </MapView>
      </View>
      <View className='w-full px-3  py-2 w-full  h-80 flex items-center justify-between gap-5'>
        <View className='w-full flex gap-2 '>
          <View className='w-full'>
            <Text className='px-3 font-bold text-zinc-700'>
              Address
            </Text>
            <View className='w-full p-5 rounded-3xl  bg-[#e2e5e9]'>
              <Text className='text-sm text-zinc-700 '>
                {
                  getNewLocation?.address ? getNewLocation.address : locationPath.address
                }
              </Text>
            </View>
          </View>
          <View className='w-full flex-row items-center justify-between px-3'>
            <View className='bg-[#e2e5e9] py-2 px- rounded-3xl px-2'>
              <Text className='text-sm text-zinc-700 '>
                {
                  getNewLocation ? getNewLocation.latitude : locationPath.latitude
                }
              </Text>
            </View>
            <View className='bg-[#e2e5e9] py-2 px-2 rounded-3xl px-2'>
              <Text className='text-sm text-zinc-700 '>
                {
                  getNewLocation ? getNewLocation.longitude : locationPath.longitude
                }
              </Text>
            </View>
          </View>
        </View>
        <View className='w-full '>
          <TouchableOpacity onPress={() => loading ? null : getNewLocation ? setLocationFunc() : CurrentLocationFun({ setPopUp, setLoading: setLoading, setLocation: setGetNewLocation }).getCurrentLocation()
          } activeOpacity={0.8} className='w-full bg-[#FF7622] h-20 rounded-3xl flex items-center justify-center'>
            {
              loading ? <ActivityIndicator color={'white'} size={'large'} /> : !getNewLocation ? <Text className='text-xl  flex flex-row gap-3 font-bold text-white'>Get Location</Text> : <Text className='text-xl  flex flex-row gap-3 font-bold text-white'>Conform Location</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LocationScree