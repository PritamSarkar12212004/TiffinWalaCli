import { View, Text, TextInput } from 'react-native';
import React from 'react';

interface InputFieldProps {
    title: string;
    placeholder: string;
    setinput: (text: string) => void;
    value?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address';
    secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    title,
    placeholder,
    setinput,
    value,
    keyboardType = 'default',
    secureTextEntry = false,
}) => {
    return (
        <View className="w-full space-y-2">
            <Text className="text-base font-semibold text-zinc-800 tracking-wide">
                {title}
            </Text>

            <TextInput
                value={value}
                onChangeText={(text) => setinput(text)}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                className="w-full bg-[#F0F2F5] text-zinc-700 placeholder:text-zinc-500 
                   h-14 rounded-2xl px-5 text-base font-medium shadow-sm"
            />
        </View>
    );
};

export default InputField;
