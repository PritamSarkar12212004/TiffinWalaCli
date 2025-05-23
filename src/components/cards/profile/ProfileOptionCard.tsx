import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../icons/Icon';
import { ProfileOptionCardProps } from '../../../interface/components/ComponentsInterface';
const ProfileOptionCard = ({
    title,
    icon,
    func,
    description,
    showArrow = true,
    showSwitch = false,
}: ProfileOptionCardProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={func}
            className='w-full bg-zinc-800 rounded-xl overflow-hidden mb-2'
        >
            <View className='flex-row items-center justify-between p-4'>
                <View className='flex-row items-center gap-3 flex-1'>
                    <View className='w-10 h-10 rounded-full bg-zinc-700 items-center justify-center'>
                        <Icon name={icon} size={20} />
                    </View>
                    <View className='flex-1'>
                        <Text className='text-white text-lg font-semibold'>{title}</Text>
                        {description && (
                            <Text className='text-zinc-400 text-sm mt-1'>{description}</Text>
                        )}
                    </View>
                </View>
                {showArrow && !showSwitch && (
                    <Icon name={icon} size={20} />
                )}

            </View>
        </TouchableOpacity>
    )
}

export default ProfileOptionCard