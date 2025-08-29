import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useUpdateProfile from '../../../../hooks/setProfile/useUpdateProfile';

const ProfileEditBtn = ({ data, loading, setloadingg }: any) => {
    const { userName, phoneNumber, email, bio, location, image, profileInfo } = data;
    const { updateProfile } = useUpdateProfile()
    const updateFunc = () => {
        updateProfile({
            userName,
            phoneNumber,
            email,
            bio,
            location,
            image,
            profileInfo,
            setloadingg
        })
    }
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => loading ? null : updateFunc()} className='w-full h-14 bg-[#FF7622] rounded-2xl flex items-center justify-center'>
            {
                loading ? <ActivityIndicator size='small' color='white' /> : <Text className='text-lg font-semibold text-white'>Update profile</Text>

            }
        </TouchableOpacity >
    )
}

export default ProfileEditBtn