import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

import { userContext } from '../../context/ContextApi';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProfileMainNav from '../../components/navigation/profile/ProfileMainNav';
import Icon from '../../components/icons/Icon';
import useFetchProduct from '../../hooks/profile/useFetchProduct';
import ProfilePost from '../../layout/mainLayout/profile/ProfilePost';
import ProfileOptions from '../../layout/mainLayout/profile/ProfileOptions';

const ProfileScreen = () => {
    const [product, setProduct] = useState<any>();
    const [totalLike, setTotalLikes] = useState<any>();
    const [totalViews, setTotalViews] = useState<any>();
    const [loading, setLoading] = useState<any>();
    const navigation = useNavigation();
    const router = useRoute()
    const {
        userTemLocation,
    } = userContext();
    const { fetchProduct } = useFetchProduct();

    useEffect(() => {
        fetchProduct({ setProduct, setTotalLikes, setTotalViews, setLoading });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 16 }}>
                        <ProfileMainNav path='Profile' />
                        {/* Profile Header */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                            <Image
                                source={{ uri: router.params.UserFprofile?.User_Image }}
                                style={{ width: 96, height: 96, borderRadius: 48, borderWidth: 2, borderColor: '#FFD700' }}
                                resizeMode="cover"
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                                    {router.params.UserFprofile?.User_Name}
                                </Text>
                                <Text style={{ color: '#ccc', marginTop: 4 }}>
                                    {router.params.UserFprofile?.User_Phone_Number}
                                </Text>
                                <Text style={{ color: '#ccc', marginTop: 4, fontSize: 13 }}>
                                    {userTemLocation?.formattedAddress || userTemLocation?.address}
                                </Text>
                            </View>
                        </View>
                        <View className="flex-row justify-between mt-6 bg-zinc-800 p-4 px-10 rounded-xl">
                            <View className="items-center">
                                <Text className="text-white text-xl font-bold">{product?.length ? product.lengt : 0}</Text>
                                <Text className="text-zinc-400 text-sm">Post</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-white text-xl font-bold">{totalLike === null ? <ActivityIndicator size="small" color="#FFD700" /> : totalLike}</Text>
                                <Text className="text-zinc-400 text-sm">Likes</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-white text-xl font-bold">{totalViews === null ? <ActivityIndicator size="small" color="#FFD700" /> : totalViews}</Text>
                                <Text className="text-zinc-400 text-sm">Views</Text>
                            </View>
                        </View>
                        {/* Action Buttons */}
                        <View style={{ flexDirection: 'row', marginTop: 16, gap: 12 }}>
                            <TouchableOpacity
                                style={{ flex: 1, backgroundColor: '#FFD700', padding: 12, borderRadius: 12 }}
                                onPress={() => navigation.navigate('ProfileEdit' as never)}
                            >
                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Edit Profile</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className='flex justify-center items-center'
                                style={{ width: 48, height: 48, backgroundColor: '#333', borderRadius: 12 }}
                                onPress={() => navigation.navigate('ProfileEdit' as never)}
                            >
                                <Icon name='gear' size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Content Sections */}
                    <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
                        <ProfilePost />
                        <ProfileOptions />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default ProfileScreen;
