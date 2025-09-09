import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FIcon from '../../../layout/icon/FIcon';

interface InputFieldProps {
    title: string;
    placeholder: string;
    setinput: (text: string) => void;
    value?: string;
    keyboardType?: 'default' | 'numeric' | 'email-address';
    secureTextEntry?: boolean;
    icon?: string;
    multiline?: boolean;
    numberOfLines?: number;
}

const InputField: React.FC<InputFieldProps> = ({
    title,
    placeholder,
    setinput,
    value,
    keyboardType = 'default',
    secureTextEntry = false,
    icon,
    multiline = false,
    numberOfLines = 1,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="w-full gap-1">
            {/* Label */}
            <Text className="text-base font-semibold text-black tracking-wide">
                {title}
            </Text>

            {/* Input Container */}
            <View
                className={`flex-row items-center rounded-2xl px-4 
          ${multiline ? 'py-3' : 'h-14'} 
          border-2 shadow-sm 
          ${isFocused ? 'border-blue-500' : 'border-slate-500'} bg-white`}
            >
                {/* Left Icon */}
                {icon && (
                    <View className="mr-3">
                        <FIcon
                            name={icon}
                            size={20}
                            color={isFocused ? '#3B82F6' : '#9CA3AF'}
                        />
                    </View>
                )}

                {/* Text Input */}
                <TextInput
                    value={value}
                    onChangeText={setinput}
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry && !showPassword}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={[styles.input, { textAlignVertical: multiline ? 'top' : 'center' }]}
                />

                {/* Password Toggle */}
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="ml-3 p-1"
                    >
                        <FIcon
                            name={showPassword ? 'eye-slash' : 'eye'}
                            size={20}
                            color="#9CA3AF"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 16,
        color: 'black', // 🔑 Always visible on white background
        fontWeight: '500',
        paddingVertical: 0, // remove extra padding
    },
});
