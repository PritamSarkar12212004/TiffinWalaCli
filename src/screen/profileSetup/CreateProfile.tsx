import { Image, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import SetproNevigation from '../../components/setProfile/navigation/SetproNevigation';
import InputField from '../../components/setProfile/inputfildes/InputField';
import FIcon from '../../layout/icon/FIcon';
import SingleImgPicker from '../../functions/image/SingleImgPicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import useCreateProfile from '../../hooks/setProfile/useCreateProfile';
import CreateProfileButton from '../../components/setProfile/buttons/CreateProfileButton';
import AuthPupup from '../../layout/popUp/AuthPupup';
import { NavigationProp } from '../../types/navigation';

const CreateProfile = () => {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();
    const location = (route.params as any)?.location;
    const phone = (route.params as any)?.phone;

    // information state
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [image, setImage] = useState<string>('');

    // auth popup state
    const [popUp, setPopUp] = useState<{
        isVisible: boolean;
        message: string;
    }>({
        isVisible: false,
        message: '',
    });

    const genderOption = [
        {
            icons: 'mars',
            name: 'Male',
            color: '#3B82F6',
        },
        {
            icons: 'venus',
            name: 'Female',
            color: '#EC4899',
        },
        {
            icons: 'transgender',
            name: 'Other',
            color: '#8B5CF6',
        },
    ];

    const selectimage = () => {
        SingleImgPicker({ setImage });
    };

    const { createProfile } = useCreateProfile();
    const profileCreater = (setLoading: any) => {
        createProfile({
            name,
            email,
            bio,
            location,
            image,
            phone,
            gender,
            setPopUp,
            setLoading,
            navigation,
        });
    };

    return (
        <View className="flex-1" style={{ backgroundColor: '#FFF3E0' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF3E0" />
            <ScrollView
                className="flex-1 mt-16"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <AuthPupup popUp={popUp} setPopUp={setPopUp} />
                <View className="px-6 pt-8 pb-6">
                    <Text className="text-3xl font-bold text-slate-800 text-center mb-2">
                        Complete Your Profile
                    </Text>
                    <Text className="text-base text-slate-600 text-center leading-6">
                        Let&apos;s get to know you better. Add your details to create your personalized experience.
                    </Text>
                </View>

                {/* Profile Picture Section */}
                <View className="items-center px-6 mb-8">
                    <View className="relative">
                        <TouchableOpacity
                            onPress={() => selectimage()}
                            activeOpacity={0.8}
                            className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100
                                       border-4 border-white shadow-xl items-center justify-center"
                        >
                            {image ? (
                                <Image
                                    source={{ uri: image }}
                                    className="w-full h-full rounded-full"
                                />
                            ) : (
                                <View className="items-center">
                                    <FIcon name="camera" size={32} color="#64748B" />
                                    <Text className="text-xs text-slate-500 mt-1 font-medium">Add Photo</Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        {/* Edit Icon */}
                        <TouchableOpacity
                            onPress={() => selectimage()}
                            className="absolute -bottom-1 -right-1 w-10 h-10 bg-blue-500 rounded-full
                                       border-4 border-white shadow-lg items-center justify-center"
                        >
                            <FIcon name="pen" size={16} color="white" />
                        </TouchableOpacity>
                    </View>

                    <Text className="text-lg font-semibold text-slate-700 mt-4 text-center">
                        {name ? name : 'Add your profile picture'}
                    </Text>
                </View>

                {/* Form Section */}
                <View className="px-6 gap-6">
                    <InputField
                        title="Full Name"
                        placeholder="Enter your full name"
                        setinput={setName}
                        value={name}
                        icon="user"
                    />

                    <InputField
                        title="Email Address"
                        placeholder="Enter your email (optional)"
                        setinput={setEmail}
                        value={email}
                        keyboardType="email-address"
                        icon="envelope"
                    />

                    <InputField
                        title="Bio"
                        placeholder="Tell us about yourself..."
                        setinput={setBio}
                        value={bio}
                        icon="quote-left"
                    />

                    {/* Gender Selection */}
                    <View className="space-y-4">
                        <Text className="text-lg font-semibold text-slate-800">Gender</Text>
                        <View className="flex-row justify-between space-x-3">
                            {genderOption.map((item, index) => {
                                const isSelected = gender === item.name;
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => setGender(item.name)}
                                        activeOpacity={0.8}
                                        className={`flex-1 items-center justify-center py-4 px-3 rounded-2xl
                                                   border-2 transition-all duration-200 ${isSelected
                                                ? `bg-gradient-to-br ${item.color === '#3B82F6'
                                                    ? 'from-blue-500 to-blue-600'
                                                    : item.color === '#EC4899'
                                                        ? 'from-pink-500 to-pink-600'
                                                        : 'from-purple-500 to-purple-600'
                                                } border-transparent shadow-lg`
                                                : 'bg-white border-slate-200 shadow-sm'
                                            }`}
                                    >
                                        <FIcon
                                            name={item.icons}
                                            size={24}
                                            color={isSelected ? 'white' : item.color}
                                        />
                                        <Text
                                            className={`mt-2 text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-700'
                                                }`}
                                        >
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                </View>

                {/* Create Profile Button */}
                <View className="px-6 mt-8">
                    <CreateProfileButton
                        profileCreater={profileCreater}
                        content="Create Profile"
                        disabled={!name.trim() || !gender}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default CreateProfile;