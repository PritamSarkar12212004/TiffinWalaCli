import { View, Text } from 'react-native'
import React from 'react'
import UiTheme from '../../../constant/theme/ui/UiTheme'

const AuthButton = () => {
    return (
        <View className='w-full flex items-center justify-center py-5 rounded-3xl mt-10' style={{ backgroundColor: UiTheme.Button.primary }}>
            <Text className='text-xl font-bold text-white'>Create Profile</Text>
        </View>
    )
}

export default AuthButton