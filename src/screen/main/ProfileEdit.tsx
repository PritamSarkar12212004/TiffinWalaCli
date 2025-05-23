import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, Alert, ActivityIndicator, Modal } from 'react-native'
import React, { useState } from 'react'
// import { Ionicons } from '@expo/vector-icons'

import { userContext } from '../../context/ContextApi';
import { Profile } from '../../interface/components/ComponentsInterface';
import ImagePikerFuncprofile from '../../functions/image/ImagePikerFuncprofile';
import useUpdateProfile from '../../hooks/profile/useUpdateProfile';
import LottiAnimation from '../../layout/animation/LottiAnimation';
import Animation from '../../constant/animation/Animation';
import ProfileMainNav from '../../components/navigation/profile/ProfileMainNav';

const ProfileEdit = () => {
    const { UserFprofile } = userContext()
    const [profile, setProfile] = useState<Profile>({
        name: UserFprofile?.User_Name || "",
        email: UserFprofile?.User_Email || "",
        phone: UserFprofile?.User_Phone_Number || "",
        address: UserFprofile?.User_Address?.address || "",
        bio: UserFprofile?.User_Bio || "",
        gender: UserFprofile?.User_Gender || "",
        profileImage: UserFprofile?.User_Image || "",
        latitude: UserFprofile?.User_Address?.latitude || null,
        longitude: UserFprofile?.User_Address?.longitude || null
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [locationDetails, setLocationDetails] = useState<{
        street?: string;
        city?: string;
        region?: string;
        country?: string;
        district?: string;
        subregion?: string;
        postalCode?: string;
        name?: string;
        isoCountryCode?: string;
    } | null>(null);

    const validateField = (key: keyof Profile, value: string) => {
        switch (key) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.length < 3) return 'Name must be at least 3 characters';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
                return '';
            case 'phone':
                if (!value.trim()) return 'Phone number is required';
                if (!/^[0-9]{10}$/.test(value)) return 'Phone number must be 10 digits';
                return '';
            case 'address':
                if (!value.trim()) return 'Address is required';
                if (value.length < 10) return 'Address must be at least 10 characters';
                return '';
            case 'bio':
                if (value.length > 200) return 'Bio must be less than 200 characters';
                return '';
            case 'gender':
                if (!value.trim()) return 'Gender is required';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (key: keyof Profile, value: string) => {
        setProfile(prev => ({
            ...prev,
            [key]: value
        }));

        const error = validateField(key, value);
        setErrors(prev => ({
            ...prev,
            [key]: error
        }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        Object.keys(profile).forEach(key => {
            const error = validateField(key as keyof Profile, profile[key as keyof Profile] as string);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const getCurrentLocation = async () => {

    };

    const pickImage = async () => {
        ImagePikerFuncprofile(setProfile);
    };

    const ErrorMessage = ({ message }: { message: string }) => (
        <View className="flex-row items-center mt-1">
            {/* <Ionicons name="alert-circle" size={16} color="#ef4444" /> */}
            <Text className="text-red-500 ml-1 text-sm">{message}</Text>
        </View>
    );

    const formFields = [
        {
            title: "Profile Picture",
            type: "image",
            icon: "camera-outline",
            action: pickImage
        },
        {
            title: "Full Name",
            value: profile.name,
            onChange: (value: string) => handleChange('name', value),
            icon: "person-outline",
            placeholder: "Enter your full name",
            error: errors.name
        },
        {
            title: "Email",
            value: profile.email,
            onChange: (value: string) => handleChange('email', value),
            icon: "mail-outline",
            placeholder: "Enter your email",
            keyboardType: "email-address" as const,
            error: errors.email
        },
        {
            title: "Phone",
            value: profile.phone,
            onChange: (value: string) => handleChange('phone', value),
            icon: "call-outline",
            placeholder: "Enter your phone number",
            keyboardType: "phone-pad" as const,
            error: errors.phone
        },
        {
            title: "Location",
            type: "location",
            value: profile.address,
            onChange: (value: string) => handleChange('address', value),
            icon: "location-outline",
            placeholder: "Enter your address",
            multiline: true,
            error: errors.address,
            actions: [
                {
                    title: "Current Location",
                    icon: "navigate-outline",
                    action: getCurrentLocation
                },
            ]
        },
        {
            title: "Bio",
            value: profile.bio,
            onChange: (value: string) => handleChange('bio', value),
            icon: "document-text-outline",
            placeholder: "Tell us about yourself",
            multiline: true,
            error: errors.bio
        },
        {
            title: "Gender",
            value: profile.gender,
            onChange: (value: string) => handleChange('gender', value),
            icon: "male-female-outline",
            placeholder: "Select your gender",
            type: "select",
            options: ["Male", "Female", "Other"],
            error: errors.gender
        }
    ];

    const { updateProfile } = useUpdateProfile()
    const [uploadingProduct, setUploadingProduct] = useState(false)
    const [uploadDoneModal, setUploadDoneModal] = useState(false);


    const updateProfileFunction = async () => {
        if (!validateForm()) {
            Alert.alert('Validation Error', 'Please check all fields and try again');
            return;
        }
        setUploadingProduct(true)
        setIsLoading(true)
        await updateProfile(profile, setIsLoading, setUploadingProduct, setUploadDoneModal)
    }



    return (
        <>
            <Modal
                visible={uploadingProduct}

                transparent={true}
                animationType="fade"
            >
                <View className="flex-1 items-center justify-center bg-black/50">
                    <View className="bg-zinc-800 rounded-2xl p-8 w-4/5 items-center">
                        <View className="w-24 flex items-center justify-center">
                            <LottiAnimation path={uploadDoneModal ? Animation.MainLoadin : Animation.MainLoadin} />
                        </View>

                        <Text className="text-white text-xl font-bold mb-4 text-center">Uploading Your Tiffin Service</Text>

                        <Text className="text-zinc-400 text-center">
                            Please wait while we upload your tiffin service details. This may take a moment.
                        </Text>
                    </View>
                </View>
            </Modal>

            <ScrollView className="flex-1 bg-black px-3 pt-3" showsVerticalScrollIndicator={false}>
                <ProfileMainNav path="Edit Profile" />
                <View className="items-center mb-6">
                    <View>
                        <View className="w-36 h-36 rounded-full bg-zinc-800 items-center justify-center mb-4">
                            {profile.profileImage ? (
                                <Image
                                    source={{ uri: profile.profileImage }}
                                    className="w-full h-full rounded-full"
                                />
                            ) : (
                                // <Ionicons name="person-outline" size={40} color="#FFD700" />
                                <></>
                            )}
                        </View>
                    </View>
                </View>

                {formFields.map((field) => (
                    <View key={field.title} className="bg-zinc-800 rounded-xl p-4 mb-4">
                        <View className="flex-row items-center mb-2">
                            <View className="w-10 h-10 rounded-full bg-zinc-700 items-center justify-center mr-3">
                                {/* <Ionicons name={field.icon as any} size={20} color="#FFD700" /> */}
                            </View>
                            <Text className="text-white text-lg">{field.title}</Text>
                        </View>

                        {field.type === 'image' ? (
                            <TouchableOpacity onPress={field.action} className="py-2">
                                <Text className="text-[#FFD700] text-center">Change Profile Picture</Text>
                            </TouchableOpacity>
                        ) : field.type === 'select' ? (
                            <View className="flex-row gap-2">
                                {field.options?.map((option) => (
                                    <TouchableOpacity
                                        key={option}
                                        onPress={() => field.onChange?.(option)}
                                        className={`flex-1 py-2 rounded-lg ${profile[field.title.toLowerCase() as keyof Profile] === option
                                            ? 'bg-[#FFD700]'
                                            : 'bg-zinc-700'
                                            }`}
                                    >
                                        <Text className={`text-center ${profile[field.title.toLowerCase() as keyof Profile] === option
                                            ? 'text-black font-semibold'
                                            : 'text-white'
                                            }`}>
                                            {option}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ) : field.type === 'location' ? (
                            <View>
                                {locationDetails && (
                                    <View className="bg-zinc-700 rounded-lg p-3 mb-2">
                                        <Text className="text-[#FFD700] font-semibold mb-1">Location Details:</Text>
                                        {locationDetails.name && <Text className="text-white">Place: {locationDetails.name}</Text>}
                                        {locationDetails.street && <Text className="text-white">Street: {locationDetails.street}</Text>}
                                        {locationDetails.district && <Text className="text-white">District: {locationDetails.district}</Text>}
                                        {locationDetails.city && <Text className="text-white">City: {locationDetails.city}</Text>}
                                        {locationDetails.subregion && <Text className="text-white">Sub Region: {locationDetails.subregion}</Text>}
                                        {locationDetails.region && <Text className="text-white">Region: {locationDetails.region}</Text>}
                                        {locationDetails.postalCode && <Text className="text-white">Postal Code: {locationDetails.postalCode}</Text>}
                                        {locationDetails.country && <Text className="text-white">Country: {locationDetails.country}</Text>}
                                    </View>
                                )}
                                <View className="flex-row gap-2">
                                    {field.actions?.map((action) => (
                                        <TouchableOpacity
                                            key={action.title}
                                            onPress={action.action}
                                            disabled={isLoadingLocation && action.title === "Current Location"}
                                            className={`flex-1 bg-zinc-700 py-2 rounded-lg flex-row items-center justify-center ${isLoadingLocation && action.title === "Current Location" ? 'opacity-50' : ''}`}
                                        >
                                            {isLoadingLocation && action.title === "Current Location" ? (
                                                <ActivityIndicator color="#FFD700" />
                                            ) : (
                                                <>
                                                    {/* <Ionicons name={action.icon as any} size={20} color="#FFD700" /> */}
                                                    <Text className="text-white ml-2">{action.title}</Text>
                                                </>
                                            )}
                                        </TouchableOpacity>
                                    ))}
                                </View>

                                <Text className="text-white bg-zinc-700 rounded-lg p-3 mt-2"
                                >
                                    {field.value}
                                </Text>
                            </View>
                        ) : (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                                placeholder={field.placeholder}
                                placeholderTextColor="#888"
                                className="text-white bg-zinc-700 rounded-lg p-3"
                                keyboardType={field.keyboardType}
                                multiline={field.multiline}
                            />
                        )}
                        {field.error && <ErrorMessage message={field.error} />}
                    </View>
                ))}

                <TouchableOpacity
                    onPress={updateProfileFunction}
                    disabled={isLoading}
                    className="bg-[#FFD700] mt-6 p-4 mb-10 rounded-full items-center justify-center"
                >
                    {isLoading ? (
                        <ActivityIndicator color="#000" />
                    ) : (
                        <Text className="text-black font-bold text-lg">Save Changes</Text>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </>
    );
};

export default ProfileEdit;
