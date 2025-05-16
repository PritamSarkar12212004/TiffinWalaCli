import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import UiTheme from '../../constant/theme/ui/UiTheme';

const AuthWraper = ({ children }: any) => {
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={UiTheme.Ui.primary} />
            <SafeAreaView className='flex-1 px-3 pt-3 ' style={{ backgroundColor: UiTheme.Ui.primary }}>
                {
                    children
                }
            </SafeAreaView>
        </>
    );
};

export default AuthWraper;