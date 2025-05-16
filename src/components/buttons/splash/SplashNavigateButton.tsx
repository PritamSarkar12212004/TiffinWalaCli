import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SplashNavigateFun from '../../../functions/splash/SplashNavigateFun';

const SplashNavigateButton = () => {
    const navigation = useNavigation();
    const handleNavigate = () => {
        SplashNavigateFun()
        navigation.replace('Auth' as never);

    }
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={{
                width: 320,
                height: 50,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}
            onPress={() => handleNavigate()
            }
        >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}>Get Start</Text>
        </TouchableOpacity >
    );
};

export default SplashNavigateButton;
