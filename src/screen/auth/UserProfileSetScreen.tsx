import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import AuthNavigation from '../../components/navigation/auth/AuthNavigation';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Dropdown } from 'react-native-element-dropdown';
import AuthButton from '../../components/buttons/auth/AuthButton';
import { useRoute } from '@react-navigation/native';
import ImagePikerFunc from '../../functions/image/ImagePikerFunc';
import AuthImage from '../../constant/image/auth/AuthImage';
import GetCurrentLocationFunc from '../../functions/location/GetCurrentLocationFunc';
import { userContext } from '../../context/ContextApi';

const UserProfileSetScreen = () => {
    const route = useRoute();
    const { setPopup } = userContext()
    // const { phoneNumber }: any = route.params;

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ];
    const [isGenderFocus, setIsGenderFocus] = useState(false);

    //fealds
    const [selectedGender, setSelectedGender] = useState(null);
    const [location, setLocation] = useState('');
    const [uri, setUri] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    // locationLoading
    const [locationLoading, setLocationLoading] = useState<any>()

    // functions call
    const pikImage = () => {
        ImagePikerFunc(setUri);
    }
    const getCurrentLocation = () => {
        setLocationLoading(true);
        GetCurrentLocationFunc(setLocation, setPopup, setLocationLoading);
    };
    return (
        <View className="flex-1 bg-black p-2">
            <ScrollView className="flex-1">
                <AuthNavigation />
                <View className="w-full flex mt-10 gap-3">
                    <View className="w-full flex items-center">
                        <TouchableOpacity activeOpacity={0.8} onPress={() => pikImage()} className="w-36 h-36 bg-zinc-400 justify-center items-center rounded-full overflow-hidden">
                            <Image
                                source={
                                    uri ? { uri: uri } : AuthImage.profileNoData
                                }
                                className="h-full w-full rounded-full"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Username */}
                    <View className="w-full">
                        <Text className="text-white text-xl font-bold mb-1">User Name</Text>
                        <View className="w-full border-2 border-gray-600 rounded-xl px-3 flex flex-row items-center gap-2">
                            <FontAwesome6 name="user" iconStyle="solid" color={"gray"} size={20} />
                            <TextInput value={userName} onChangeText={(text) => setUserName(text)} className="flex-1 text-white text-xl" placeholder="User Name" placeholderTextColor={'gray'} />
                        </View>
                    </View>
                    {/* Email */}
                    <View className="w-full">
                        <Text className="text-white text-xl font-bold mb-1">Email (optional)</Text>
                        <View className="w-full border-2 border-gray-600 rounded-xl px-3 flex flex-row items-center gap-2">
                            <FontAwesome6 name="envelope" iconStyle="solid" color={"gray"} size={20} />
                            <TextInput value={email} onChangeText={(email) => setEmail(email)} keyboardType='email-address' className="flex-1 text-white text-xl" placeholder="Email address" placeholderTextColor={'gray'} />
                        </View>
                    </View>
                    {/* Bio */}
                    <View className="w-full">
                        <Text className="text-white text-xl font-bold mb-1">BIO</Text>
                        <View className="w-full border-2 border-gray-600 rounded-xl px-3 flex flex-row items-center gap-2">
                            <FontAwesome6 name="pen" iconStyle="solid" color={"gray"} size={20} />
                            <TextInput keyboardType='default' value={bio} onChangeText={(bio) => setBio(bio)} className="flex-1 text-white text-xl" placeholder="Write Bio" placeholderTextColor={'gray'} />
                        </View>
                    </View>
                    {/* Gender Dropdown */}
                    <View className="w-full">
                        <Text className="text-white text-lg font-semibold mb-1">Gender</Text>
                        <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={genderOptions}
                            search={false}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isGenderFocus ? 'Select gender' : '...'}
                            value={selectedGender}
                            onFocus={() => setIsGenderFocus(true)}
                            onBlur={() => setIsGenderFocus(false)}
                            onChange={item => {
                                setSelectedGender(item.value);
                                setIsGenderFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <FontAwesome6 name="genderless" iconStyle="solid" color={"gray"} size={25} />
                            )}
                        />
                    </View>
                    {/* Location */}
                    <View className="w-full">
                        <Text className="text-white text-lg font-semibold mb-1">Location</Text>
                        <TouchableOpacity onPress={() => locationLoading ? null : getCurrentLocation()} className="w-full border-2 bg-zinc-800 border-gray-600 rounded-xl px-3 flex flex-row items-center gap-3 h-16">
                            {
                                locationLoading ? <ActivityIndicator size={20} color={'orange'} /> : <FontAwesome6 name="location-arrow" iconStyle="solid" color={"gray"} size={25} />

                            }
                            {
                                locationLoading ? <Text className="text-lg font-semibold text-gray-400">Getting current location...</Text>
                                    : location ? <Text className="text-lg flex-auto font-semibold text-gray-400 text-sm text-wrap">{location.FormateAddress}</Text> : <Text className="text-lg font-semibold text-gray-400">Get current location</Text>

                            }
                        </TouchableOpacity>
                    </View>

                    <View className='w-full flex items-center justify-center'>
                        <AuthButton />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 12,
        backgroundColor: '#27272a',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        gap: 10,

    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray',

    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white',
        gap: 10,

    },
    iconStyle: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'white',
    },
});

export default UserProfileSetScreen;
