import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FIcon from '../../../layout/icon/FIcon'
import CurrentLocationFun from '../../../functions/location/CurrentLocationFun'
import { useNavigation } from '@react-navigation/native'

const SetproButton = ({ setPopUp, locationget, content, icon, setLocation }: any) => {
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    const location = () => {
        CurrentLocationFun({ setPopUp, setLoading: setLoading, setLocation: setLocation }).getCurrentLocation()
    }
    const navigatePage = () => {
        navigation.navigate('CreateProfile', {
            location: locationget,
        })
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => loading ? null : locationget ? navigatePage() : location()} className='bg-[#FF7622] w-full  rounded-2xl py-6 flex items-center h-20 justify-center'>
            {
                loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : locationget ? (
                    <Text className='text-xl  flex flex-row gap-3 font-bold text-white'>NEXT <FIcon name='arrow-right' size={20} color='white' /> </Text>
                ) : <Text className='text-xl  flex flex-row gap-3 font-bold text-white'>{content} {
                    icon ? <FIcon name={icon} size={20} color='white' /> : null
                } </Text>
            }
        </TouchableOpacity>
    )
}

export default SetproButton