import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import FIcon from '../../../layout/icon/FIcon';

interface CreateProfileButtonProps {
    content: string;
    profileCreater: (setLoading: (loading: boolean) => void) => void;
    disabled?: boolean;
}

const CreateProfileButton: React.FC<CreateProfileButtonProps> = ({
    content,
    profileCreater,
    disabled = false,
}) => {
    const [loading, setLoading] = useState(false);

    const handlePress = () => {
        if (loading || disabled) return;
        profileCreater(setLoading);
    };

    const isDisabled = loading || disabled;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
            disabled={isDisabled}
            className={`w-full rounded-2xl h-14 flex items-center justify-center shadow-lg
                ${
                    isDisabled
                        ? 'bg-slate-300 shadow-slate-200'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-blue-200'
                }`}
        >
            <View className="flex-row items-center justify-center">
                {loading ? (
                    <>
                        <ActivityIndicator size="small" color="#fff" />
                        <Text className="text-lg font-bold text-white ml-3">
                            Creating...
                        </Text>
                    </>
                ) : (
                    <>
                        <Text className={`text-lg font-bold ${isDisabled ? 'text-slate-500' : 'text-white'}`}>
                            {content}
                        </Text>
                        <FIcon
                            name="arrow-right"
                            size={20}
                            color={isDisabled ? '#94A3B8' : 'white'}
                            style={{ marginLeft: 8 }}
                        />
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default CreateProfileButton;