import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, FlatList, StyleSheet, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import NavigationShowProduct from '../../../../components/main/showProduct/navigation/NavigationShowProduct'
import FIcon from '../../../../layout/icon/FIcon'
import { useRoute } from '@react-navigation/native'
import useViewsProductApi from '../../../../hooks/main/dashboard/controller/useViewsProductApi'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import useUserFetchData from '../../../../hooks/main/dashboard/useUserFetchData'
import ShowProBottmSheet from '../../../../layout/bottomSheet/ShowProduct/ShowProBottmSheet'
import NoProfileDataFound from '../../../../layout/bottomSheet/NoProfileData/NoProfileDataFound'
import { userContext } from '../../../../utils/context/ContextProvider'
import useLikeproduct from '../../../../hooks/main/dashboard/controller/useLikeproduct'
import ShowProBottmSheetSclotan from '../../../../skeleton/ShowProduct/ShowProBottmSheetSclotan'
import useFollower from '../../../../hooks/main/dashboard/controller/useFollower'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import notificationPayload from '../../../../functions/notification/notificationPayloadBody'
import ShowProductSclotan from '../../../../skeleton/dashboard/ShowProductSclotan'
const { width } = Dimensions.get('window');
const ShowmMainProductScreen = () => {
    const [fevirote, setIsFavorite] = useState<any>(null)
    const { userInfo } = userContext()
    const route = useRoute() as any
    const data = route.params?.item as any
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList<any> | null>(null);
    const [vender, setVender] = useState<any>(null)
    const [follower, setFollower] = useState<any>(null)
    const [followerLoadingm, setFollowerLoading] = useState<boolean | any>(false)

    const handleScroll = (event: any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return data.postCoverImage.map((_: any, index: number) => {
            const isActive = activeIndex === index
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        flatListRef.current?.scrollToIndex({ index, animated: true });
                    }}
                    className={`mx-1 rounded-full ${isActive ? 'bg-orange-500 h-2.5 w-5' : 'bg-gray-300 h-2 w-2'}`}
                    activeOpacity={0.9}
                />
            );
        });
    };
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const openBottomSheet = () => {
        bottomSheetRef.current?.snapToIndex(0);
    };
    const { top } = useSafeAreaInsets()
    const { viewsProduct } = useViewsProductApi()
    const { fetchUserData } = useUserFetchData()
    const { likeProductFetch } = useLikeproduct()
    const { fetchFollower } = useFollower()
    const funcFollowControll = () => {
        setFollower(!follower)
        fetchFollower({
            followingId: userInfo.userinfo._id,
            FollowerId: data.postVendorId,
            followerLocation: userInfo.userinfo.User_Address,
            imageUri: userInfo.userinfo.User_Image,
            User_Name: userInfo.userinfo.User_Name,
            setFollowing: setFollower,
            status: !follower,
            setFollowerLoading: setFollowerLoading,
            followNotification: followNotification
        })
    }

    const callForView = (adminId: any) => {
        viewsProduct({ postId: data._id, adminId: adminId });

    }

    useEffect(() => {
        likeProductFetch(userInfo.userinfo, data._id, setIsFavorite)
        fetchUserData(data.postVendorId, setVender, setFollower, userInfo.userinfo._id, callForView)

        return () => {
            setVender(null)
            setIsFavorite(null)
        }
    }, [])

    const [modalImage, setModalImage] = useState<{
        status: boolean,
        img: string | null
    }>({
        status: false,
        img: null,
    })

    const LikeNotification = notificationPayload({
        contentImg: data.postCoverImage[0],
        description: `${userInfo.userinfo.User_Name} liked your post ${data.postTitle}`,
        riciver: data.postVendorId,
        sender: userInfo.userinfo._id,
        senderImg: userInfo.userinfo.User_Image,
        title: `${userInfo.userinfo.User_Name} liked your post`,
        type: 'controller',
    });
    const followNotification = notificationPayload({
        contentImg: data.postCoverImage[0],
        description: `${userInfo.userinfo.User_Name} Follow you by your Post ${data.postTitle}`,
        riciver: data.postVendorId,
        sender: userInfo.userinfo._id,
        senderImg: userInfo.userinfo.User_Image,
        title: `${userInfo.userinfo.User_Name} Follow you`,
        type: 'controller',
    });

    const renderItem = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} style={{ width, height: 384 }} onPress={() => {
                setModalImage({
                    status: true,
                    img: item,
                })
            }} >
                <Image
                    source={{ uri: item }}

                    className='rounded-b-3xl w-full h-full'
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false}>
                <Modal transparent statusBarTranslucent visible={!!modalImage.status} animationType='fade' style={{ paddingTop: top }}>
                    <SafeAreaView className='flex-1 p-5 bg-black/70'>
                        <View className='flex-1 flex items-center justify-between py-10 relative'>
                            <View />
                            {modalImage.img && (
                                <Image
                                    className="w-full"
                                    style={{ aspectRatio: 1 }}
                                    resizeMode="cover"
                                    source={{ uri: modalImage.img }}
                                />
                            )}
                            <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                setModalImage({
                                    status: false,
                                    img: null
                                })
                            }} className='h-20 w-20 bg-black/30 rounded-full flex items-center justify-center'>
                                <FIcon color={"white"} name={"xmark"} size={25} />
                            </TouchableOpacity>

                        </View>
                    </SafeAreaView>
                </Modal>
                {
                    data && follower && fevirote ? <View className='flex-1 bg-white relative gap-8'>
                        <View className='w-full flex relative rounded-b-3xl gap-3 pb-5'>
                            <NavigationShowProduct fevirote={fevirote} userId={userInfo.userinfo._id} productid={data._id} setIsFavorite={setIsFavorite} LikeNotification={LikeNotification} />
                            <View className='w-full h-96 bg-gray-200 rounded-b-3xl overflow-hidden'>
                                <FlatList
                                    ref={flatListRef}
                                    data={data.postCoverImage}
                                    renderItem={renderItem}
                                    keyExtractor={(_, index) => index.toString()}
                                    horizontal
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    onScroll={handleScroll}
                                    scrollEventThrottle={16}
                                />
                                <View className='absolute bottom-4 w-full flex flex-row justify-center'>
                                    {renderDotIndicators()}
                                </View>
                            </View>
                            <View className='w-full px-4 flex gap-8'>
                                <View className='w-full flex gap-2 '>
                                    <View className='w-full flex flex-row items-center justify-between flex-wrap'>
                                        <Text className='text-2xl font-bold'>{data.postTitle}</Text>
                                        <TouchableOpacity activeOpacity={0.9} onPress={() => followerLoadingm ? null : funcFollowControll()} className={`w-28 flex items-center justify-center h-9 border rounded-full shadow-sm ${follower ? 'bg-white border-black/20' : 'bg-orange-500 border-orange-500'}`} disabled={!!followerLoadingm}>
                                            {
                                                followerLoadingm ? <ActivityIndicator color={'white'} size={'small'} /> : follower == true ? <Text className='text-black font-semibold'>Following</Text>
                                                    : <Text className='text-white font-semibold'>Follow</Text>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View className='w-full flex flex-row gap-2'>
                                        <FIcon name='location-dot' color='orange' size={18} />
                                        <Text className='text-sm text-gray-500 text-wrap pr-3'>{data.postLocation}</Text>
                                    </View>
                                </View>
                                <View className='w-full flex flex-row items-center justify-between'>
                                    <View className='flex flex-row gap-3'>
                                        <View className='flex flex-row items-center gap-1 px-2 py-1 rounded-full bg-orange-50'>
                                            <FIcon name='heart' color='orange' size={18} />
                                            <Text className='text-sm font-semibold text-orange-600'>{data.productLikes.length}</Text>
                                        </View>
                                        <View className='flex flex-row items-center gap-1 px-2 py-1 rounded-full bg-orange-50'>
                                            <FIcon name='eye' color='orange' size={18} />
                                            <Text className='text-sm font-semibold text-orange-600'>{data.postTotalViews}</Text>
                                        </View>
                                        <View className='flex flex-row items-center gap-1 px-2 py-1 rounded-full bg-orange-50'>
                                            <FIcon name='location-dot' color='orange' size={18} />
                                            <Text className='text-sm font-semibold text-orange-600'>{data.distanceText}</Text>
                                        </View>
                                    </View>
                                    <View className='flex flex-row items-center justify-center gap-2'>
                                        <FIcon name='money-bill' color='green' size={18} />
                                        <Text className='text-lg font-bold'>₹ {data.postPrice}</Text>
                                    </View>
                                </View>
                                <View className='w-full '>
                                    <Text className='text-wrap text-base flex flex-wrap text-zinc-600'>
                                        {
                                            data.postDescription
                                        }
                                    </Text>
                                </View>
                                <View className='w-full flex '>
                                    <Text className='text-xl font-semibold'>Food Type</Text>
                                    <ScrollView className='w-full flex py-3' horizontal showsHorizontalScrollIndicator={false}>
                                        {
                                            data.postFoodType.map((item: any, index: number) => (
                                                <TouchableOpacity activeOpacity={0.9} key={index} className='px-4 py-2 flex flex-row items-center gap-3 mr-3 rounded-full bg-orange-100'>
                                                    <View className='h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm'>
                                                        <FIcon name={'leaf'} size={18} color={item == 'Vegan' ? 'green' : item == 'Veg' ? 'green' : 'red'} />
                                                    </View>
                                                    <Text className='text-sm font-semibold'>{item}</Text>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                                <View className='w-full flex gap-3'>
                                    <Text className='text-xl font-semibold'>Available days</Text>
                                    <View className='w-full flex flex-row flex-wrap gap-3'>
                                        {
                                            data.postValidDay.map((item: any, index: number) => (
                                                <View key={index} className='flex flex-row items-center justify-center gap-1 px-3 py-1 rounded-full bg-gray-100'>
                                                    <FIcon name={'calendar-days'} size={16} color={'orange'} />
                                                    <Text className='text-xs text-gray-600'>{item}</Text>
                                                </View>
                                            ))
                                        }
                                    </View>
                                </View>
                                <View className='w-full flex gap-2 '>
                                    <Text className='text-xl font-semibold'>Food menu</Text>
                                    {
                                        <View className='w-full flex gap-3'>
                                            {
                                                data.postMenu.map((item: any, index: number) => (
                                                    <TouchableOpacity activeOpacity={0.9} onPress={() => setModalImage({
                                                        status: true,
                                                        img: item,
                                                    })} key={index} className='w-full rounded-2xl overflow-hidden shadow-md shadow-black/10'>
                                                        <Image source={{ uri: item }} className='w-full h-48' style={{ resizeMode: 'cover' }} />
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                    }
                                </View>
                                <View className='w-full flex '>
                                    <TouchableOpacity onPress={() => openBottomSheet()} activeOpacity={0.9} className='w-full h-14 bg-orange-500 rounded-3xl flex items-center justify-center shadow-lg shadow-orange-300/40'>
                                        <Text className='text-base text-white font-semibold'>
                                            Contact Details
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View> : <ShowProductSclotan />
                }

            </ScrollView>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={['100%']}
                enablePanDownToClose={true}
                index={-1}
                handleIndicatorStyle={{ backgroundColor: '#e5e7eb', width: 48, height: 4, borderRadius: 9999 }}
                backgroundStyle={{ borderTopLeftRadius: 28, borderTopRightRadius: 28 }}
                handleStyle={{ paddingVertical: 8 }}
            >
                <BottomSheetView className='flex-1 bg-white p-4'>
                    {
                        vender ? vender?.message ? <NoProfileDataFound message={vender} /> : <ShowProBottmSheet vender={vender} setModalImage={setModalImage} /> : <ShowProBottmSheetSclotan />
                    }
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});
export default ShowmMainProductScreen