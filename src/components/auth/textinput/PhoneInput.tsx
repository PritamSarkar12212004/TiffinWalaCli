import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { PhoneInputProps } from './types'; // optional: external types if you want
import FIcon from '../../../layout/icon/FIcon';

const PhoneInput: React.FC<PhoneInputProps> = ({ setPhoneNumber, setActiveNavigate }) => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleChange = (text: string) => {
        const cleaned = text.replace(/[^0-9]/g, '');
        if (cleaned.length <= 10) {
            setPhone(cleaned);
            setPhoneNumber(cleaned);
            if (cleaned.length === 10) {
                setError('');
                setActiveNavigate(true);
            } else {
                setError('Phone number must be 10 digits');
                setActiveNavigate(false);
            }
        }
    };

    return (
        <View className="w-full gap-3">
            {/* 🔤 Label */}
            <View className="flex-row items-baseline justify-between px-1">
                <Text className="text-base font-semibold text-[#111E45]">WhatsApp Number</Text>
                <Text className="text-xs text-gray-400">* Required</Text>
            </View>

            {/* 📱 Input Field */}
            <View className="bg-[#F8F8F8] rounded-2xl px-5 h-16 flex-row items-center shadow-sm border border-gray-200">
                <Text className="text-lg text-zinc-500 mr-2">+91</Text>
                <TextInput
                    value={phone}
                    onChangeText={handleChange}
                    placeholder="7796******"
                    keyboardType="number-pad"
                    maxLength={10}
                    className="flex-1 text-lg text-zinc-700"
                    placeholderTextColor="#9CA3AF"
                />
            </View>

            {/* ⚠️ Error */}
            {error ? (
                <View className="flex-row items-center mt-1 px-1">
                    <Text className="text-sm text-red-500">{error}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default PhoneInput;
