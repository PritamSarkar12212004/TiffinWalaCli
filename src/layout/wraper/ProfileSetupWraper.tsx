import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const ProfileSetupWraper = ({ children }: any) => {
    return (
        <SafeAreaView className='flex-1 bg-[#FFF3E0]' edges={['top', 'bottom']}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View className='flex-1'>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default ProfileSetupWraper;
