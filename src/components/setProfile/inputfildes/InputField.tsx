import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import FIcon from '../../../layout/icon/FIcon';
import { LinearGradient } from 'expo-linear-gradient';

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
    const animatedValue = useRef(new Animated.Value(0)).current;

    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (!value) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    };

    const borderColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E2E8F0', '#6366F1'],
    });

    return (
        <View className="w-full gap-3">
            {/* Label */}
            <Text className="text-base font-bold text-slate-700 tracking-wide">
                {title}
            </Text>

            {/* Input Container */}
            <Animated.View
                style={[
                    styles.container,
                    {
                        borderColor,
                        shadowColor: isFocused ? '#6366F1' : '#000',
                        shadowOffset: { width: 0, height: isFocused ? 4 : 2 },
                        shadowOpacity: isFocused ? 0.1 : 0.05,
                        shadowRadius: isFocused ? 12 : 8,
                        elevation: isFocused ? 6 : 3,
                    },
                ]}
                className={`flex-row items-center rounded-2xl px-4 bg-white 
                    ${multiline ? 'py-4' : 'h-16'}`}
            >
                {/* Left Icon */}
                {icon && (
                    <View className="mr-3">
                        <FIcon
                            name={icon}
                            size={22}
                            color={isFocused ? '#6366F1' : '#94A3B8'}
                        />
                    </View>
                )}

                {/* Text Input */}
                <TextInput
                    value={value}
                    onChangeText={setinput}
                    placeholder={placeholder}
                    placeholderTextColor="#94A3B8"
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry && !showPassword}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={[
                        styles.input,
                        {
                            textAlignVertical: multiline ? 'top' : 'center',
                            height: multiline ? numberOfLines * 24 : '100%',
                        }
                    ]}
                    className="flex-1 text-lg"
                />

                {/* Password Toggle */}
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="ml-3 p-2 rounded-full bg-slate-100"
                    >
                        <FIcon
                            name={showPassword ? 'eye-slash' : 'eye'}
                            size={18}
                            color="#64748B"
                        />
                    </TouchableOpacity>
                )}
            </Animated.View>
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        backgroundColor: '#FFFFFF',
    },
    input: {
        fontSize: 16,
        color: '#0F172A',
        fontWeight: '500',
        paddingVertical: 0,
    },
});