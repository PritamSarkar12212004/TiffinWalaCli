import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const ProfileSetupWraper = ({ children }: any) => {
    return (
        <SafeAreaView className='flex-1 bg-white' edges={['top', 'bottom']}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View className='flex-1 px-3'>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default ProfileSetupWraper;
