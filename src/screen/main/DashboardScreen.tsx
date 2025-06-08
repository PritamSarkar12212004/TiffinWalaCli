import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import messaging from '@react-native-firebase/messaging'
import DashHeader from '../../components/main/dashBoard/Header/DashHeader'
import { userContext } from '../../utils/context/ContextProvider'
import GetUserInfo from '../../functions/main/information/GetUserInfo'
import CateguaryDahs from '../../components/main/dashBoard/categuary/CateguaryDahs'
import SeacrhDash from '../../components/main/dashBoard/search/SeacrhDash'
import DistanceCateDash from '../../components/main/dashBoard/categuary/DistanceCateDash'
import useFetchMainProduct from '../../hooks/main/dashboard/useFetchMainProduct'
import AnimationLotti from '../../components/global/animation/AnimationLotti'
import AnimationPath from '../../constants/animation/AnimationPath'
import DistanceData from '../../data/dashBoard/distance/DistanceData'
import FoodType from '../../data/dashBoard/foodType/FoodType'
import requestForNotification from '../../functions/notification/request/requestForNotification'
import onScreenNotiFyFunc from '../../functions/notification/manager/onScreenNotiFyFunc'
import useTokenGet from '../../hooks/notification/useTokenGet'
import eventNotify from '../../functions/notification/manager/eventNotify'
import remaindernotiFy from '../../functions/notification/manager/remaindernotiFy'
import DashBoardCard from '../../components/main/dashBoard/card/DashBoardCard'
import MainCardSkalaton from '../../skeleton/dashboard/MainCardSkalaton'
import SearchSclaton from '../../skeleton/dashboard/SearchSclaton'
import CateguaryDahsSclaton from '../../skeleton/dashboard/CateguaryDahsSclaton'
import DistanceCateDashSclaton from '../../skeleton/dashboard/DistanceCateDashSclaton'
import { useNavigation } from '@react-navigation/native'
import NativeAds from '../../ads/nativeAds/NativeAds'

const DashboardScreen = () => {
  const { userInfo, setUserInfo, pageLoader, setPageLoader } = userContext()
  const [loading, setloading] = useState(true)
  const [mainData, setMainData] = useState([])
  const [token, settoken] = useState<any>(null)
  const [updateToken, setUpdateToken] = useState<any>(null)
  const [distance, selecetedDistance] = useState(DistanceData[1])
  const [foodType, setFoodType] = useState(FoodType[0])
  const navigation = useNavigation()

  const { fetchMaindata } = useFetchMainProduct()
  const { tokenSet } = useTokenGet()
  const injectAdsIntoData = (data) => {
    const result = [];
    data.forEach((item, index) => {
      result.push(item);
      if ((index + 1) % 3 === 0) {
        result.push({ isAd: true, _id: `ad-${index}` });
      }
    });
    return result;
  };


  useEffect(() => {
    const tokenRefresh = messaging().onTokenRefresh((newToken) => {
      setUpdateToken(newToken)
    })
    return () => {
      tokenRefresh()
    }
  }, [])

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const { type } = remoteMessage.data || {}
      if (type === 'open') onScreenNotiFyFunc(remoteMessage)
      else if (type === 'event') eventNotify(remoteMessage)
      else if (type === 'remainder') remaindernotiFy(remoteMessage)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (userInfo && token) {
      tokenSet(updateToken ?? token, userInfo.userinfo._id)
    }
  }, [userInfo, token])

  useEffect(() => {
    requestForNotification(settoken)
    GetUserInfo().then((res) => {
      setUserInfo(res)
      fetchMaindata({
        setLoading: setloading,
        setMainData: setMainData,
        location: res.location,
        distance,
        foodType,
        navigation
      })
    })

    return () => {
      setUserInfo(null)
    }
  }, [pageLoader])

  return (
    <View className="flex-1 bg-[#F3F3F3] px-3 py-t">
      {userInfo ? (
        <View className="flex-1">
          <DashHeader userInfo={userInfo} />
          <FlatList
            ListHeaderComponent={
              <View className="gap-4 mt-4">
                {loading ? (
                  <View className='flex flex-1 gap-4 '>
                    <SearchSclaton />
                    <CateguaryDahsSclaton />
                    <DistanceCateDashSclaton />
                  </View>
                ) : (
                  <View className='flex  gap-4 '>
                    <SeacrhDash name={userInfo.userinfo.User_Name} distance={distance} />
                    <CateguaryDahs
                      foodType={foodType}
                      setFoodType={setFoodType}
                      setPageLoader={setPageLoader}
                      pageLoader={pageLoader}
                    />
                    <DistanceCateDash
                      setPageLoader={setPageLoader}
                      pageLoader={pageLoader}
                      distance={distance}
                      selecetedDistance={selecetedDistance}
                    />
                  </View>
                )}
              </View>
            }
            data={injectAdsIntoData(mainData)}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              if (item.isAd) {
                return (
                  <NativeAds />
                );
              }
              return <DashBoardCard item={item} />;
            }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              loading ? (
                <MainCardSkalaton />
              ) : (
                <View className=" flex-1 justify-center items-center mt-10">
                  <Text className="text-gray-500 text-xl font-semibold">No Data Found in your area </Text>
                </View>
              )
            }
          />

        </View>
      ) : (
        <View className="flex-1 justify-center items-center">
          <AnimationLotti
            height={200}
            width={200}
            bg={'#F3F3F3'}
            path={AnimationPath.SplashLoading}
          />
        </View>
      )}
    </View>
  )
}

export default DashboardScreen
