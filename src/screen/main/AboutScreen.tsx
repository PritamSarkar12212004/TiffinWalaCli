import { View, Text, TouchableOpacity, ScrollView, Linking, Image } from 'react-native'
import React from 'react'
import ProfileMainNav from '../../components/navigation/profile/ProfileMainNav';
import MainLogo from '../../constant/image/logo/MainLogo';
import Icon from '../../components/icons/Icon';

const AboutScreen = () => {
    const aboutSections = [
        {
            title: "App Information",
            items: [
                {
                    title: "Version",
                    value: "Application.nativeApplicationVersion",
                    icon: "info"
                },
                {
                    title: "Build",
                    value: "2025",
                    icon: "gears"
                },
                {
                    title: "Last Updated",
                    value: "March 2025",
                    icon: "download"
                }
            ]
        },
        {
            title: "Company",
            items: [
                {
                    title: "Website",
                    value: "www.tiffinwala.com",
                    icon: "cloud",
                    action: () => Linking.openURL('https://www.tiffinwala.com')
                },
                {
                    title: "Email",
                    value: "tiffinwala2004@gmail.com",
                    icon: "envelope",
                    action: () => Linking.openURL('mailto:tiffinwala2004@gmail.com')
                },
                {
                    title: "Phone",
                    value: "+917620876689",
                    icon: "phone",
                    action: () => Linking.openURL('tel:+917620876689')
                }
            ]
        },

    ];

    return (
        <ScrollView className="flex-1 bg-black px-3 pt-3" showsVerticalScrollIndicator={false}>
            <ProfileMainNav path="About App" />
            <View className="items-center mb-8">
                <View className="w-24 h-24  bg-white rounded-full overflow-hidden items-center justify-center mb-4">
                    <Image resizeMode='cover' source={MainLogo.src} className="w-full h-full rounded-full" />
                </View>
                <Text className="text-white text-2xl font-bold mb-2">TiffinWala</Text>
                <Text className="text-zinc-400 text-center">Your one-stop solution for finding the best tiffin services</Text>
            </View>

            {aboutSections.map((section) => (
                <View key={section.title} className="mb-6">
                    <Text className="text-zinc-400 text-sm mb-3">{section.title}</Text>
                    <View className="bg-zinc-800 rounded-xl overflow-hidden">
                        {section.items.map((item, index) => (
                            <TouchableOpacity
                                key={item.title}
                                onPress={item.action}
                                className={`flex-row items-center p-4 ${index !== section.items.length - 1 ? 'border-b border-zinc-700' : ''
                                    }`}
                            >
                                <View className="w-10 h-10 rounded-full bg-zinc-700 items-center justify-center mr-3">
                                    <Icon name={item.icon} size={22} />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-white text-lg">{item.title}</Text>
                                    <Text className="text-zinc-400 text-sm">{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ))}

            <View className="bg-zinc-800 rounded-xl p-4 mb-6">
                <Text className="text-white text-lg font-semibold mb-2">Follow Us</Text>
                <View className="flex-row justify-around">
                    <TouchableOpacity
                        className="w-12 h-12 rounded-full bg-zinc-700 items-center justify-center"
                        onPress={() => Linking.openURL('https://facebook.com/tiffinwala')}
                    >
                        <Icon name='' size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="w-12 h-12 rounded-full bg-zinc-700 items-center justify-center"
                        onPress={() => Linking.openURL('https://instagram.com/tiffinwala')}
                    >
                        <Icon name='' size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="w-12 h-12 rounded-full bg-zinc-700 items-center justify-center"
                        onPress={() => Linking.openURL('https://twitter.com/tiffinwala')}
                    >
                        <Icon name='' size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default AboutScreen 