import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DashHeader from '../../components/main/dashBoard/Header/DashHeader'
import { userContext } from '../../utils/context/ContextProvider'
import GetUserInfo from '../../functions/main/information/GetUserInfo'
import CateguaryDahs from '../../components/main/dashBoard/categuary/CateguaryDahs'
import SeacrhDash from '../../components/main/dashBoard/search/SeacrhDash'

const DashboardScreen = () => {
  const { userInfo, setUserInfo } = userContext()
  const [loading, setloading] = useState(false)
  useEffect(() => {
    const data = GetUserInfo()
    data.then((res) => {
      setUserInfo(res)
      setloading(true)
    })
  }, [])
  return (
    <View className='flex-1 bg-[#F3F3F3] px-3 py-2'>
      {
        loading ? <View className='w-full'>
          <DashHeader userInfo={userInfo} />
          <View className='w-full flex gap-5 mt-5'>
            <SeacrhDash name={userInfo.userinfo.
              User_Name} />
            <CateguaryDahs />
          </View>
        </View> : <View className='flex-1 flex items-center justify-center'>
          <Text className='text-2xl font-bold'>Loading...</Text>
        </View>
      }
    </View>
  )
}

export default DashboardScreen