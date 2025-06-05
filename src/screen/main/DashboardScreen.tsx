import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import messaging from '@react-native-firebase/messaging';
import DashHeader from '../../components/main/dashBoard/Header/DashHeader'
import { userContext } from '../../utils/context/ContextProvider'
import GetUserInfo from '../../functions/main/information/GetUserInfo'
import CateguaryDahs from '../../components/main/dashBoard/categuary/CateguaryDahs'
import SeacrhDash from '../../components/main/dashBoard/search/SeacrhDash'
import DistanceCateDash from '../../components/main/dashBoard/categuary/DistanceCateDash'
import DashBoardCarsdlayout from '../../layout/main/dashboard/DashBoardCarsdlayout/DashBoardCarsdlayout'
import useFetchMainProduct from '../../hooks/main/dashboard/useFetchMainProduct'
import AnimationLotti from '../../components/global/animation/AnimationLotti'
import AnimationPath from '../../constants/animation/AnimationPath'
import DistanceData from '../../data/dashBoard/distance/DistanceData'
import FoodType from '../../data/dashBoard/foodType/FoodType'
import requestForNotification from '../../functions/notification/request/requestForNotification'
import onScreenNotiFyFunc from '../../functions/notification/noticonFig/onScreenNotiFyFunc';
import useTokenGet from '../../hooks/notification/useTokenGet';
const DashboardScreen = () => {
  const { userInfo, setUserInfo, pageLoader, setPageLoader } = userContext()
  const [loading, setloading] = useState(true);
  const [mainData, setMainData] = useState([]);
  const [token, settoken] = useState<any>(null)
  const [updateToken, setUpdateToken] = useState<any>(null);
  // components
  const [distance, selecetedDistance] = useState(DistanceData[1]);
  const [foodType, setFoodType] = useState(FoodType[0]);

  // hooks
  const { fetchMaindata } = useFetchMainProduct();
  const { tokenSet } = useTokenGet();


  useEffect(() => {
    const tokenRefresh = messaging().onTokenRefresh((newToken) => {
      setUpdateToken(newToken);
    });

    return () => {
      tokenRefresh();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onScreenNotiFyFunc(remoteMessage);
    });
    return unsubscribe;
  }, []);


  useEffect(() => {
    if (userInfo && token) {
      tokenSet(updateToken ? updateToken : token, userInfo.userinfo._id);
    }
  }, [userInfo, token]);

  useEffect(() => {
    requestForNotification(settoken)
    const data = GetUserInfo()
    data.then((res) => {
      setUserInfo(res)
      fetchMaindata({ setLoading: setloading, setMainData: setMainData, location: res.location, distance: distance, foodType: foodType })
    });
    return () => {
      setUserInfo(null);
    }
  }, [pageLoader])
  return (
    <View className='flex-1 bg-[#F3F3F3] px-3 py-2'>
      {
        !loading && userInfo ? <View className='flex-1'>
          <DashHeader userInfo={userInfo} />
          <View className='w-full flex gap-3 mt-5'>
            <ScrollView showsVerticalScrollIndicator={false} >
              <View className='flex-1 flex gap-3'>
                <SeacrhDash name={userInfo.userinfo.
                  User_Name} distance={distance} />
                <CateguaryDahs foodType={foodType} setFoodType={setFoodType} setPageLoader={setPageLoader} pageLoader={pageLoader} />
                <DistanceCateDash setPageLoader={setPageLoader} pageLoader={pageLoader} distance={distance} selecetedDistance={selecetedDistance} />
                <DashBoardCarsdlayout mainData={mainData} />
              </View>
            </ScrollView>
          </View>
        </View> : <View className='flex-1 flex items-center justify-center'>
          <AnimationLotti height={400} width={400} path={AnimationPath.MainDashBoardLoading} bg="#F3F3F3" />
          <Text className='text-2xl font-bold'>
            Loading...
          </Text>
        </View>
      }
    </View>
  )
}

export default DashboardScreen