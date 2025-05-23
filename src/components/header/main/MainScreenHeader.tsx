import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { userContext } from '../../../context/ContextApi';
import Icon from '../../icons/Icon';
import UiTheme from '../../../constant/theme/ui/UiTheme';

const MainPageHeader = () => {
    const navigation = useNavigation();
    const { UserFprofile, userTemLocation } = userContext();

    return (
        <View className='w-full py-2  flex items-center justify-between px-3 gap-10 flex-row ' style={{ backgroundColor: UiTheme.Ui.secondary }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("LocationPage" as never)}
                className='flex-row flex-auto items-center gap-2 flex-1 mr-2'
            >
                <Icon name="location-dot" size={23} />
                <Text className='text-zinc-400 text-lg overflow-hidden font-bold' numberOfLines={1}>
                    {userTemLocation?.formattedAddress ? userTemLocation?.formattedAddress : userTemLocation?.address}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ProfileScreen', {
                UserFprofile: UserFprofile
            })}>
                <Image source={{ uri: UserFprofile?.User_Image }} className='w-14 h-14 rounded-full' />
            </TouchableOpacity>
        </View>
    )
}

export default MainPageHeader