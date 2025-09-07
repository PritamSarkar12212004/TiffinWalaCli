import { ScrollView, View } from 'react-native'
import React from 'react'
import NavigationProfile from '../../components/main/profile/navigation/NavigationProfile'
import ProfileView from '../../components/main/profile/elements/ProfileView'
import ProfileOptionContainer from '../../layout/main/profile/options/ProfileOptionContainer'
import { useNavigation, useRoute } from '@react-navigation/native'
import { removeAuthToken, removeLocation } from '../../functions/Token/PageTokenManagerFun'
import PageToken from '../../constants/tokens/PageToken'
import { removeNotifyToken } from '../../functions/Token/NotifyTokenManagerFun'
import NotiFyToken from '../../constants/tokens/NotiFyToken'
import { NavigationProp } from '../../types/navigation'

const ProfileScreen = () => {
    const navigation = useNavigation<NavigationProp>()

    const route = useRoute()
    const profileInfo = route.params?.userInfo?.userinfo
    const location = route.params?.userInfo?.location

    const options1 = [
        {
            title: 'Personal Information',
            icon: 'user',
            color: '#FB6F3D',
            function: () => {
                navigation.navigate('PersonalInfo', { profileInfo: profileInfo, location: location })
            }
        },

    ]
    const options2 = [
        {
            title: 'Favorite',
            icon: 'heart',
            color: '#B33D',
            function: () => {
                navigation.navigate('FeviroteProductScreen', { profileInfo: profileInfo })

            }
        },


    ]
    const options3 = [
        {
            title: 'Terms & Conditions',
            icon: 'paperclip',
            color: '#2AE1E1',
            function: () => {
                navigation.navigate('TermsCondition', { profileInfo: profileInfo })
            }
        },
        {
            title: 'About App',
            icon: 'gear',
            color: '#FB6D3A',
            function: () => {
                navigation.navigate('About', { profileInfo: profileInfo })

            }
        },
    ]
    const options4 = [
        {
            title: 'Log Out',
            icon: 'right-from-bracket',
            color: '#FB4A59',
            function: async () => {
                 removeAuthToken(PageToken.profile.mainDataToken)
                 removeLocation(PageToken.profile.locationToken)
                 removeNotifyToken(NotiFyToken.Event)
                 removeNotifyToken(NotiFyToken.Fun)
                 removeNotifyToken(NotiFyToken.Promotion)
                 removeNotifyToken(NotiFyToken.Remainder)
                 removeAuthToken(PageToken.profile.profileToken)
                 navigation.replace('AuthNavigations' as any)
            }
        },


    ]

    return (
        <View className='flex-1 bg-white px-3 pt-2'>
            <NavigationProfile path='Profile' option='' func={() => { }} />
            <ScrollView className='flex-1 pt-5 ' showsVerticalScrollIndicator={false}>
                <View className='flex-1 flex gap-10 mb-20'>
                    <ProfileView profileInfo={profileInfo} />
                    <View className='flex-1 flex gap-5'>
                        <ProfileOptionContainer options={options1} />
                        <ProfileOptionContainer options={options2} />
                        <ProfileOptionContainer options={options3} />
                        <ProfileOptionContainer options={options4} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen