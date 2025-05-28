import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
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

const DashboardScreen = () => {
  const { userInfo, setUserInfo } = userContext()
  const [loading, setloading] = useState(true)
  const [mainData, setMainData] = useState([])
  const { fetchMaindata } = useFetchMainProduct()
  useEffect(() => {
    const data = GetUserInfo()
    data.then((res) => {
      setUserInfo(res)
      fetchMaindata({ setLoading: setloading, setMainData: setMainData, location: res.location })
    })
    return () => {
      setUserInfo(null)
    }
  }, [])
  return (
    <View className='flex-1 bg-[#F3F3F3] px-3 py-2'>
      {
        !loading ? <View className='flex-1'>
          <DashHeader userInfo={userInfo} />
          <View className='w-full flex gap-3 mt-5'>
            <ScrollView showsVerticalScrollIndicator={false} >
              <SeacrhDash name={userInfo.userinfo.
                User_Name} />
              <CateguaryDahs />
              <DistanceCateDash />
              <DashBoardCarsdlayout mainData={mainData} />
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