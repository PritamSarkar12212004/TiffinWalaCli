import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import useCallOtpSignup from '../../../hooks/auth/signup/useCallOtpSignup';

interface PhoneInputProps {
    setPhoneNumber: (number: string) => void;
    phoneNumber?: any;
    setActiveNavigate: (active: boolean) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ setPhoneNumber, setActiveNavigate }) => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleChange = (text: string) => {
        // Remove non-numeric characters
        const cleaned = text.replace(/[^0-9]/g, '');
        // Limit to 10 digits
        if (cleaned.length <= 10) {
            setPhone(cleaned);
            setPhoneNumber(cleaned);
            // Validate length
            if (cleaned.length === 10) {
                setError('');
                setActiveNavigate(true);
            } else {
                setError('Phone number must be 10 digits');
            }
        }
    };

    return (
        <View className='w-full flex gap-2'>
            <Text className='text-xl font-semibold text-zinc-900'>WhatsApp Number</Text>
            <TextInput
                value={phone}
                onChangeText={handleChange}
                className='bg-[#F0F5FA] px-5 h-16 w-full text-xl rounded-3xl text-zinc-700 placeholder:text-zinc-700'
                placeholder='7796*******'
                keyboardType='number-pad'
                maxLength={10}
            />
            {error ? <Text className='text-red-500 text-sm px-3'>{error}</Text> : null}
        </View>
    );
};

export default PhoneInput;
