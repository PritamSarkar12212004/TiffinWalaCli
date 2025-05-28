import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const MainWraper = ({ children }: any) => {
    return (
        <SafeAreaView className='flex-1 bg-[#F3F3F3]'>
            <StatusBar barStyle="dark-content" translucent />
            <View className='flex-1 '>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default MainWraper;
