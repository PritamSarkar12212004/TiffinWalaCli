import { View, Text, FlatList } from 'react-native'
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
import { setNotifyToken } from '../../functions/Token/NotifyTokenManagerFun'
import NotiFyToken from '../../constants/tokens/NotiFyToken'
import DashBoardCard from '../../components/main/dashBoard/card/DashBoardCard'

const DashboardScreen = () => {
  const { userInfo, setUserInfo, pageLoader, setPageLoader } = userContext()
  const [loading, setloading] = useState(true)
  const [mainData, setMainData] = useState([])
  const [token, settoken] = useState<any>(null)
  const [updateToken, setUpdateToken] = useState<any>(null)
  const [distance, selecetedDistance] = useState(DistanceData[1])
  const [foodType, setFoodType] = useState(FoodType[0])

  const { fetchMaindata } = useFetchMainProduct()
  const { tokenSet } = useTokenGet()

  useEffect(() => {
    const tokenRefresh = messaging().onTokenRefresh((newToken) => {
      setUpdateToken(newToken)
    })

    setNotifyToken(NotiFyToken.Event, true)
    setNotifyToken(NotiFyToken.Fun, true)
    setNotifyToken(NotiFyToken.Promotion, true)
    setNotifyToken(NotiFyToken.Remainder, true)

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
        foodType
      })
    })

    return () => {
      setUserInfo(null)
    }
  }, [pageLoader])

  return (
    <View className="flex-1 bg-[#F3F3F3] px-3 py-t">
      {!loading && userInfo ? (
        <View className="flex-1">
          <DashHeader userInfo={userInfo} />
          <FlatList
            ListHeaderComponent={
              <View className="gap-4 mt-4">
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
            }
            data={mainData}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <DashBoardCard item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </View>
      ) : (
        <View className="flex-1 items-center justify-center">
          <AnimationLotti
            height={400}
            width={400}
            path={AnimationPath.MainDashBoardLoading}
            bg="#F3F3F3"
          />
          <Text className="text-2xl font-bold">Loading...</Text>
        </View>
      )}
    </View>
  )
}

export default DashboardScreen
