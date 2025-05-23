import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainScreenHeader from '../../components/header/main/MainScreenHeader'
import UiTheme from '../../constant/theme/ui/UiTheme'
import Icon from '../../components/icons/Icon'
import FetchMaindData from '../../hooks/main/FetchMaindData'
import LottiAnimation from '../../layout/animation/LottiAnimation'
import Animation from '../../constant/animation/Animation'
import MainCardLayout from '../../layout/mainLayout/MainCardLayout'

const DashboardScreen = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [mainData, setMainData] = useState<any>()
  const { fetchMainData } = FetchMaindData()
  useEffect(() => {
    setLoading(true)
    fetchMainData({ setMainData, setLoading })
  }, [])
  return (
    <View className='flex-1 w-full flex gap-3' style={{ backgroundColor: UiTheme.Ui.primary }}>
      <MainScreenHeader />
      {
        loading ? <View className='flex-1 flex items-center justify-center'>
          <LottiAnimation path={Animation.MainLoadin} />
        </View> :
          <View className='flex-1 flex items-center px-2'>
            <TouchableOpacity activeOpacity={0.9} className='w-full flex'>
              <View className='w-full  py-3 rounded-2xl gap-3 flex-row items-center px-5' style={{ backgroundColor: UiTheme.Ui.secondary }}>
                <Icon name="magnifying-glass" size={25} />
                <Text className="text-white/40 text-xl ">
                  Mess name, Area name
                </Text>
              </View>
            </TouchableOpacity>
            <View className='flex-1 flex items-center pt-3'>
              <MainCardLayout mainData={mainData} />
            </View>
          </View>

      }

    </View>
  )
}

export default DashboardScreen