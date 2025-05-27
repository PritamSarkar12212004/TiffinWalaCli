import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const AuthWraper = ({ children }: any) => {
    return (
        <SafeAreaView className='flex-1 bg-black' edges={['top', 'bottom']}>
            <StatusBar barStyle="light-content" backgroundColor="#fff" translucent />
            <View className='flex-1 '>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default AuthWraper;
