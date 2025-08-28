import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../types/navigation'

const DashHeader = ({ userInfo }: any) => {
    const navigation = useNavigation<NavigationProp>()
    return (
        <View className='w-full flex items-center justify-between flex-row pb-3 pt-1'>
            <TouchableOpacity onPress={() => navigation.navigate('LocationScree', {
                location: userInfo.location
            })} activeOpacity={0.8} className='flex flex-row items-center justify-center gap-3'>
                <View className='bg-[#ECF0F4] h-14 w-14 rounded-full flex items-center justify-center'>
                    <FIcon name='location-dot' size={25} color='#FF7622' />
                </View>
                <View className=''>
                    <Text className='text-xl font-semibold text-[#FF7622] tracking-widest leading-tight'>Deliver to</Text>
                    <View className='flex flex-row items-center justify-center gap-2'>
                        <Text className='text-sm font-semibold tracking-widest leading-tight'>
                            {userInfo.location.address.length > 20
                                ? `${userInfo.location.address.slice(0, 20)}`
                                : userInfo.location.address}
                        </Text>
                        <FIcon name='chevron-down' size={15} color='black' />
                    </View>
                </View>
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', {
                    userInfo: userInfo
                })} activeOpacity={0.8} className='bg-[#181C2E] h-14 w-14 rounded-full flex items-center justify-center'>
                    <Text className='text-[#FF7622] text-xl font-bold text-center '>
                        {
                            userInfo.userinfo.User_Name.charAt(0).toUpperCase()
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default DashHeader