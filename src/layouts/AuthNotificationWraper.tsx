import {View} from 'react-native';
import React from 'react';
import AuthPopUp from '../components/popup/auth/AuthPopUp';
import {userContext} from '../context/ContextApi';

const AuthNotificationWraper = ({children}: {children: React.ReactNode}) => {
  const {isAuthNotificationVisible, setIsAuthNotificationVisible} =
    userContext();
  return (
    <View className="w-full h-full relative">
      {isAuthNotificationVisible.status && (
        <View className="absolute top-0 left-0 w-full h-full bg-black/60 z-10 px-4 py-10 flex items-center justify-end">
          <AuthPopUp
            setIsAuthNotificationVisible={setIsAuthNotificationVisible}
          />
        </View>
      )}
      {children}
    </View>
  );
};

export default AuthNotificationWraper;
