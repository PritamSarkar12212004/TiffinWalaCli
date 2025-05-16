import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashTheme from '../../constant/theme/splash/SplashTheme';
import { StatusBar } from 'react-native';

const SplashWraper = ({ children }: any) => {
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={SplashTheme.bgColor} />
            <SafeAreaView className='flex-1 ' style={{ backgroundColor: SplashTheme.bgColor }}>
                {
                    children
                }
            </SafeAreaView>
        </>
    );
};

export default SplashWraper;