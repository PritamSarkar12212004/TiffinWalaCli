import { View, Text, TextInput } from 'react-native';
import React from 'react';

interface OtpInputProps {
    setEnterOtp: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ setEnterOtp }) => {
    return (
        <View className="w-full space-y-2">
            <Text className="text-lg font-semibold text-[#111E45]">Enter OTP Code</Text>
            <TextInput
                onChangeText={(otp) => setEnterOtp(otp)}
                placeholder="••••"
                keyboardType="number-pad"
                maxLength={6}
                className="h-16 px-6 text-2xl tracking-[10px] text-center rounded-2xl bg-[#F0F5FA] text-[#111E45] placeholder:text-gray-400 shadow-md"
            />
            <Text className="text-xs text-gray-400 px-1">
                Check your phone for the code. It may take a few seconds.
            </Text>
        </View>
    );
};

export default OtpInput;
