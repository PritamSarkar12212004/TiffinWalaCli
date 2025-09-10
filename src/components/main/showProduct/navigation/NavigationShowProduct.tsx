import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import FIcon from '../../../../layout/icon/FIcon'
import { useNavigation } from '@react-navigation/native'
import useControllLike from '../../../../hooks/main/dashboard/controller/useControllLike'

const NavigationShowProduct = ({ fevirote, userId, productid, setIsFavorite, LikeNotification }: any) => {
    const { likeControllers } = useControllLike()
    const navigation = useNavigation()
    const handleFavorite = () => {
        likeControllers(userId, productid, productid, setIsFavorite, LikeNotification)
        setIsFavorite(!fevirote);
    };
    return (
        <View className='w-full flex flex-row items-center justify-between px-3 left-0 absolute top-5 z-50'>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} className='h-12 flex items-center justify-center w-12 flex items-center justify-center bg-white/40 rounded-full '>
                <FIcon name='chevron-left' size={25} color='black' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFavorite()} activeOpacity={0.8} className='h-12 flex items-center justify-center w-12 flex items-center justify-center bg-white/40 rounded-full '>
                {
                    fevirote !== null ? fevirote ? <FIcon name='heart' size={25} color='red' /> : <FIcon name='heart' size={25} color='white' /> : <ActivityIndicator size={'small'} color={'white'} />

                }
            </TouchableOpacity>
        </View>
    )
}

export default NavigationShowProduct