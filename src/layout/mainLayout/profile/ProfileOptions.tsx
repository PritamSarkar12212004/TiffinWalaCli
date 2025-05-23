import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ProfileOptionCard from '../../../components/cards/profile/ProfileOptionCard'

const ProfileOptions = () => {
    const navigation = useNavigation()

    const data = [
        {
            title: "Help & Support",
            icon: "truck",
            description: "Get help and contact support",
            func: () => {
                navigation.navigate("HelpSupport" as never)
            }
        },
        {
            title: "About App",
            icon: "info",
            description: "App version and information",
            func: () => {
                navigation.navigate("AboutScreen" as never)
            }
        }


    ]
    return (
        <View className='w-full mb-4'>
            <View className='flex-row items-center justify-between mb-4'>
                <View>
                    <Text className='text-white text-xl font-bold'>Settings</Text>
                    <Text className='text-zinc-400 text-sm'>Manage your account settings</Text>
                </View>
            </View>

            <View className='flex gap-2'>
                {data.map((item, index) => (
                    <ProfileOptionCard
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        func={item.func}
                        description={item.description}
                    />
                ))}
            </View>
        </View>
    )
}

export default ProfileOptions