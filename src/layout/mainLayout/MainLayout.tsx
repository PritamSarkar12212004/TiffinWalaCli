import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import UiTheme from '../../constant/theme/ui/UiTheme';

const MainLayout = ({ children }: any) => {
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={UiTheme.Ui.secondary} />
            <SafeAreaView  className='flex-1' style={{ backgroundColor: UiTheme.Ui.secondary }}>
                {
                    children
                }
            </SafeAreaView>
        </>
    );
};

export default MainLayout;