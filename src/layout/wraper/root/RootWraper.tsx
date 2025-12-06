import Icon from '@react-native-vector-icons/fontawesome6'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import useUpdateChek from '../../../hooks/update/useUpdateChek'

const { width } = Dimensions.get('window')

interface RootWrapperProps {
    children: React.ReactNode
}

const RootWrapper: React.FC<RootWrapperProps> = ({ children }) => {
    const [updateRequired, setUpdateRequired] = useState(false);
    const { apiCall } = useUpdateChek()
    useEffect(() => {
        const checkUpdate = async () => {
            const res = await apiCall();
            if (res === false) {
                setUpdateRequired(true);
            }
        };
        checkUpdate();
    }, [])

    if (updateRequired) {
        return (
            <View className="flex-1 bg-purple-700 px-5 pt-12">
                <View className="flex-1 justify-center items-center">
                    <View className="items-center mb-10">
                        <View className="p-10 rounded-full bg-white items-center justify-center mb-4 shadow-lg">
                            <Text className="text-5xl"><Icon iconStyle="solid" size={30} color={"orange"} name='message' /></Text>
                        </View>
                        <Text className="text-white text-3xl font-bold text-center">
                            Update Available
                        </Text>
                    </View>
                    <View className="w-full bg-white/10 rounded-2xl p-6 mb-8">
                        <Text className="text-white text-center text-lg mb-6">
                            What's new in this version:
                        </Text>
                        <View className="space-y-3">
                            {[
                                { icon: '🎨', text: 'New modern design system' },
                                { icon: '⚡', text: '2x faster performance' },
                                { icon: '🔒', text: 'Enhanced security features' },
                                { icon: '📱', text: 'Better mobile experience' }
                            ].map((feature, index) => (
                                <View key={index} className="flex-row items-center">
                                    <Text className="text-2xl mr-3">{feature.icon}</Text>
                                    <Text className="text-white text-base flex-1">{feature.text}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        className="w-4/5 py-4 bg-pink-500 rounded-full items-center justify-center mb-4"
                    >
                        <Text className="text-white text-lg font-bold">Download Update</Text>
                    </TouchableOpacity>

                    <Text className="text-white/50 text-center text-sm">
                        Your app will restart automatically after update
                    </Text>
                </View>
            </View>
        )
    }
    return <View className="flex-1">{children}</View>
}

export default RootWrapper
