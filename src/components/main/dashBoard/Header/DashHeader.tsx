import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
const DashHeader = ({ userInfo }: any) => {
    return (
        <View className='w-full flex items-center justify-between flex-row'>
            <View className='flex flex-row items-center justify-center gap-3'>
                <TouchableOpacity activeOpacity={0.8} className='bg-[#ECF0F4] h-16 w-16 rounded-full flex items-center justify-center'>
                    <FIcon name='location-dot' size={30} color='#FF7622' />
                </TouchableOpacity>
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
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.8} className='bg-[#181C2E] h-16 w-16 rounded-full flex items-center justify-center'>
                    <Text className='text-[#FF7622] text-3xl font-bold text-center '>
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