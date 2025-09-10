import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavigationProfile from '../../../../components/main/profile/navigation/NavigationProfile'
import ProfileView from '../../../../components/main/profile/elements/ProfileView'
import { useNavigation, useRoute } from '@react-navigation/native'
import FIcon from '../../../../layout/icon/FIcon'
import { NavigationProp } from '../../../../types/navigation'

const PersonalInfo = () => {
    const navigation = useNavigation<NavigationProp>()
    const route = useRoute()
    const { profileInfo, location } = route.params as any
    const options = [
        {
            title: profileInfo.User_Name,
            icon: 'user',
            color: '#FB6F3D',
            function: () => {

            }
        },
        {
            title: location.address,
            icon: 'location-dot',
            color: '#413DFB',
            function: () => {
            }
        },
        {
            title: profileInfo.User_Phone_Number,
            icon: 'phone',
            color: '#369BFF',
            function: () => { }
        },

    ]
    return (
        <View className='flex-1 bg-white px-3 pt-2'>
            <NavigationProfile path='Personal Info' option='Edit' func={() => {
                navigation.navigate('ProfileEdit', { location, profileInfo })
            }} />
            <View className='flex-1 pt-4 flex gap-6'>
                <ProfileView profileInfo={profileInfo} />
                <View className='w-full flex'>
                    <View className='flex bg-white rounded-3xl px-4 py-2 gap-1 shadow-md shadow-black/5 border border-black/5'>
                        {
                            options.map((item, index) => {
                                return <TouchableOpacity onPress={() => item.function()} activeOpacity={0.9} key={index} className='w-full py-3 flex flex-row items-center justify-between' >
                                    <View className='flex flex-row items-center gap-4'>
                                        <View className='h-[52px] w-[52px] rounded-2xl bg-white flex items-center justify-center shadow-md shadow-black/10'>
                                            <FIcon name={item.icon} size={20} color={item.color} />
                                        </View>
                                        <Text className='text-base flex-auto'>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            })
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PersonalInfo