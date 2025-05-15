import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthScreenWraper = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView className="flex-1 bg-black p-4">{children}</SafeAreaView>
  );
};

export default AuthScreenWraper;
