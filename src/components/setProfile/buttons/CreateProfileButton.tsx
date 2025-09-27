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
            className={`w-full rounded-2xl h-14 flex items-center justify-center shadow-lg bg-orange-400`}
        >
            <View className="flex-row items-center justify-center gap-4">
                {loading ? (
                    <>
                        <ActivityIndicator size="small" color="#fff" />
                        <Text className="text-lg font-bold text-white ml-3">
                            Creating...
                        </Text>
                    </>
                ) : (
                    <>
                        <Text className={`text-lg font-bold ${isDisabled ? 'text-white' : 'text-white'}`}>
                            {content}
                        </Text>
                        <FIcon
                            name="arrow-right"
                            size={20}
                            color={isDisabled ? 'white' : 'white'}
                            style={{ marginLeft: 8 }}
                        />
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default CreateProfileButton;