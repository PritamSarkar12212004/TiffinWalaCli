import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import UiTheme from '../../../constant/theme/ui/UiTheme'
import CreateProfile from '../../../functions/auth/CreateProfile'
import { userContext } from '../../../context/ContextApi'
import { useNavigation } from '@react-navigation/native'

const AuthButton = ({
    userName,
    email,
    bio,
    selectedGender,
    location,
    uri,
    phoneNumber,
    setProfileCreateLodaing,
    profileCreateLoading
}: any) => {
    const navigation = useNavigation();

    const { setUserProfile, setUserTemLocation } = userContext();


    const createProfileFunc = () => {
        CreateProfile({
            userName,
            email,
            bio,
            selectedGender,
            location,
            uri,
            phoneNumber,
            setProfileCreateLodaing,
            setUserProfile, setUserTemLocation, navigation
        })
    }
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => createProfileFunc()} className='w-full flex items-center justify-center py-5 rounded-3xl mt-10' style={{ backgroundColor: UiTheme.Button.primary }}>
            {
                profileCreateLoading ? <ActivityIndicator size={25} color={"white"} /> : <Text className='text-xl font-bold text-white'>Create Profile</Text>

            }
        </TouchableOpacity>
    )
}

export default AuthButton