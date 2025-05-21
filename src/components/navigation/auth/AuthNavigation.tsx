import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';


const AuthNavigation = () => {
    const navigation = useNavigation()
    return (
        <View className='w-full flex items-center gap-4 flex-row'>
            {
                navigation.canGoBack() && <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                    <FontAwesome6 name="arrow-left" iconStyle="solid" color={"white"} size={25} />
                </TouchableOpacity>
            }
            <View>
                <Text className='text-white text-2xl'>Personal Information</Text>
            </View>
        </View>
    )
}

export default AuthNavigation