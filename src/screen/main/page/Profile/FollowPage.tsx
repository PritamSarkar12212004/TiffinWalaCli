import { FlatList, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import NavigationProfile from '../../../../components/main/profile/navigation/NavigationProfile'
import useFetchFollowing from '../../../../hooks/main/profile/useFetchFollowing'
import moment from 'moment'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import useUnfollow from '../../../../hooks/main/profile/useUnfollow'
import { userContext } from '../../../../utils/context/ContextProvider'

const FollowPage = () => {
    const { userInfo } = userContext()
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [selectedUser, setSelectedUser] = useState<any | null>(null)
    const { fetchFollowing } = useFetchFollowing()
    const { unfollow } = useUnfollow()
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const openBottomSheet = () => {
        bottomSheetRef.current?.snapToIndex(0);
    };

    useEffect(() => {
        fetchFollowing({ setdata: setData, setLoading })
        return () => {
            setData([])
        }
    }, [])

    const getShortLocation = (address: string) => {
        if (!address) return ""
        const parts = address.split(",")
        return parts.slice(-3, -1).join(", ")
    }

    const openData = (user: any) => {
        setSelectedUser(user)
        openBottomSheet()
    }

    const unfolloeFunc = ({ user, item }: any) => {
        setData((prev) => prev.filter((d) => d._id !== item._id));
        unfollow({ venderId: user._id, userId: userInfo?.userinfo?._id })
    }

    return (
        <View className="flex-1 bg-white px-3 pt-2">
            {/* Header always visible */}
            <NavigationProfile path="Following" option="" func={() => { }} />

            {loading ? (
                // Loading state with header visible
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    ListEmptyComponent={
                        <View className="flex-1 items-center justify-center py-20">
                            <Text className="text-gray-500 text-lg">No Data Found</Text>
                        </View>
                    }
                    renderItem={({ item }) => {
                        const user = item.followerId;
                        return (
                            <TouchableOpacity
                                onPress={() => openData(user)}
                                className="w-full border border-zinc-200 rounded-2xl p-4 mb-3 shadow-md bg-white"
                                activeOpacity={0.9}
                            >
                                <View className="flex-row items-center">
                                    <Image
                                        source={{ uri: user?.User_Image || item.followerImg }}
                                        className="w-14 h-14 rounded-full mr-4"
                                    />
                                    <View className="flex-1">
                                        <Text className="text-lg font-bold text-gray-900">{user?.User_Name}</Text>
                                        {user?.User_Bio ? (
                                            <Text className="text-gray-600 text-sm" numberOfLines={1}>
                                                {user.User_Bio}
                                            </Text>
                                        ) : (
                                            <Text className="text-gray-400 text-sm">No bio available</Text>
                                        )}
                                        <Text className="text-gray-500 text-xs mt-1">
                                            📍 {getShortLocation(user?.User_Address?.address)}
                                        </Text>
                                        <Text className="text-gray-400 text-xs">
                                            {user?.User_Post_Count?.length || 0} Posts • Joined {moment(user?.User_Created_At).format("MMM YYYY")}
                                        </Text>
                                    </View>

                                    <TouchableOpacity
                                        className="px-3 py-2 bg-red-500 rounded-full"
                                        onPress={() => unfolloeFunc({ user, item })}
                                    >
                                        <Text className="text-white text-xs font-semibold">Unfollow</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            )}

            {/* Bottom Sheet for user details */}
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={['50%']}
                enablePanDownToClose={true}
                index={-1}
                handleIndicatorStyle={{ backgroundColor: '#e5e7eb', width: 48, height: 4, borderRadius: 9999 }}
                backgroundStyle={{ borderTopLeftRadius: 28, borderTopRightRadius: 28 }}
                handleStyle={{ paddingVertical: 8 }}
            >
                <BottomSheetView className='flex-1 bg-gray-50 p-4'>
                    <View className="bg-gray-50 rounded-t-3xl p-5 max-h-[80%]">
                        <View className="items-center mb-4">
                            <Image
                                source={{ uri: selectedUser?.User_Image }}
                                className="w-24 h-24 rounded-full mb-3"
                            />
                            <Text className="text-2xl font-bold text-gray-900">{selectedUser?.User_Name}</Text>
                            {selectedUser?.User_Bio && (
                                <Text className="text-gray-600 text-sm mt-1">{selectedUser.User_Bio}</Text>
                            )}
                        </View>
                        <View className="space-y-3">
                            <Text className="text-gray-700"><Text className="font-semibold">Email:</Text> {selectedUser?.User_Email}</Text>
                            <Text className="text-gray-700"><Text className="font-semibold">Phone:</Text> {selectedUser?.User_Phone_Number}</Text>
                            <Text className="text-gray-700"><Text className="font-semibold">Gender:</Text> {selectedUser?.User_Gender}</Text>
                            {selectedUser?.User_Address?.address && (
                                <Text className="text-gray-700">
                                    <Text className="font-semibold">Address:</Text> {selectedUser.User_Address.address}
                                </Text>
                            )}
                            <Text className="text-gray-700">
                                <Text className="font-semibold">Joined:</Text> {moment(selectedUser?.User_Created_At).format("MMMM Do YYYY")}
                            </Text>
                        </View>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}

export default FollowPage
