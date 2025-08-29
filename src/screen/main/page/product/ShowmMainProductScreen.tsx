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
const { width } = Dimensions.get('window');
const ShowmMainProductScreen = () => {
    const [fevirote, setIsFavorite] = useState<any>(null)
    const { userInfo } = userContext()
    const route = useRoute()
    const data = route.params?.item as any
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
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
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        flatListRef.current?.scrollToIndex({ index, animated: true });
                    }}
                    className={`h-2 w-2 rounded-full mx-1 ${activeIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}
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
        setFollowerLoading(true)
        fetchFollower({
            followingId: userInfo.userinfo._id,
            FollowerId: data.postVendorId,
            setFollowing: setFollower,
            status: !follower,
            setFollowerLoading: setFollowerLoading
        })
    }

    useEffect(() => {
        viewsProduct(data._id);
        fetchUserData(data.postVendorId, setVender, setFollower)
        likeProductFetch(userInfo.userinfo, data._id, setIsFavorite)
        return () => {
            setVender(null)
            setIsFavorite(null)
        }
    }, [])

    const [modalImage, setModalImage] = useState<null | {
        status: boolean,
        img: string | null
    }>({
        status: false,
        img: null,
    })

    const renderItem = ({ item }: { item: any }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} style={{ width, height: 384 }} onPress={() => {
                console.log(item)
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
        <GestureHandlerRootView style={styles.container}>
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <Modal transparent statusBarTranslucent visible={modalImage?.status} animationType='fade' style={{ paddingTop: top }}>
                    <SafeAreaView className='flex-1 p-5 bg-black/70'>
                        <View className='flex-1 flex items-center justify-between py-10 relative'>
                            <View />
                            <Image
                                className="w-full"
                                style={{ aspectRatio: 1 }}
                                resizeMode="cover"
                                source={{
                                    uri: modalImage?.img
                                        ? modalImage.img
                                        : modalImage.img
                                }}
                            />
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
                    data ? <View className='flex-1 bg-[#F3F3F3] relative  gap-10'>
                        <View className='w-full flex relative rounded-b-3xl gap-3 pb-5'>
                            <NavigationShowProduct fevirote={fevirote} userId={userInfo.userinfo._id} productid={data._id} setIsFavorite={setIsFavorite} />
                            <View className='w-full h-96 bg-gray-300 rounded-b-3xl overflow-hidden'>
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
                                <View className='w-full flex gap-1 '>
                                    <View className='w-full flex flex-row items-center justify-between'>
                                        <Text className='text-2xl font-semibold'>{data.postTitle}</Text>
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => followerLoadingm ? null : funcFollowControll()} className={`w-28 flex items-center justify-center ${follower ? 'bg-white border-black' : "bg-red-500 duration-100 border-red-500"} h-8 border-[1px]  rounded-full`}>
                                            {
                                                followerLoadingm ? <ActivityIndicator color={'orange'} size={'small'} /> : follower == true ? <Text className={`${follower ? 'bg-white' : "bg-white"}`}>Following</Text>
                                                    : <Text className={`${follower ? 'color-white' : "color-white"}`}>Follow</Text>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View className='w-full flex flex-row gap-2'>
                                        <FIcon name='location-dot' color='orange' size={20} />
                                        <Text className='text-sm text-gray-500 text-wrap pr-3'>{data.postLocation}</Text>
                                    </View>
                                </View>
                                <View className='w-full flex flex-row  items-center justify-between'>
                                    <View className='flex flex-row gap-5'>
                                        <View className='flex flex-row gap-1'>
                                            <FIcon name='heart' color='orange' size={22} />
                                            <Text className='text-lg font-semibold'>{data.productLikes.length}</Text>
                                        </View>
                                        <View className='flex flex-row gap-1'>
                                            <FIcon name='eye' color='orange' size={22} />
                                            <Text className='text-lg font-semibold'>{data.postTotalViews}</Text>
                                        </View>
                                        <View className='flex flex-row gap-1'>
                                            <FIcon name='location-dot' color='orange' size={22} />
                                            <Text className='text-lg font-semibold'>{data.distanceText}</Text>
                                        </View>
                                    </View>
                                    <View className='flex flex-row items-center justify-center gap-2 '>
                                        <FIcon name='money-bill' color='green' size={22} />
                                        <Text className='text-lg font-semibold'>₹ {data.postPrice}</Text>
                                    </View>
                                </View>
                                <View className='w-full '>
                                    <Text className='text-wrap text-lg flex flex-wrap text-zinc-500'>
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
                                                <TouchableOpacity activeOpacity={0.8} key={index} className='pr-10 p-2 flex flex-row items-center gap-5 mr-5 rounded-full' style={{ backgroundColor: "#FFD27C" }}>
                                                    <View className='h-10 w-10 rounded-full bg-white flex items-center justify-center'>
                                                        <FIcon name={'leaf'} size={20} color={item == 'Vegan' ? 'green' : item == 'Veg' ? 'green' : 'red'} />
                                                    </View>
                                                    <Text className=' font-semibold'>{item}</Text>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </ScrollView>
                                </View>
                                <View className='w-full flex gap-3'>
                                    <Text className='text-xl font-semibold'>Available days</Text>
                                    <View className='w-full flex flex-row flex-wrap gap-5'>
                                        {
                                            data.postValidDay.map((item: any, index: number) => (
                                                <View key={index} className='flex flex-row items-center justify-center gap-1'>
                                                    <FIcon name={'calendar-days'} size={20} color={'orange'} />
                                                    <Text className='text-sm text-gray-500'>{item}</Text>
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
                                                    <TouchableOpacity activeOpacity={0.8} onPress={() => setModalImage({
                                                        status: true,
                                                        img: item,
                                                    })} key={index} className='w-full flex gap-1'>
                                                        <Image source={{ uri: item }} className='rounded-2xl' style={{ width: "100%", aspectRatio: 2 / 1.4 }} />
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                    }
                                </View>
                                <View className='w-full flex '>
                                    <TouchableOpacity onPress={() => openBottomSheet()} activeOpacity={0.8} className='w-full flex h-14 bg-orange-400 rounded-3xl flex items-center justify-center'>
                                        <Text className='text-lg text-white font-semibold'>
                                            Contact Details
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View> : <View className='flex-1 bg-[#F3F3F3] py-2 gap-10 flex items-center justify-center'>
                        <Text>Loading</Text>
                    </View>
                }

            </ScrollView>
            <BottomSheet

                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={['100%']}
                enablePanDownToClose={true}
                index={-1}
            >
                <BottomSheetView className='flex-1 bg-white p-3'>
                    {
                        vender ? vender?.message ? <NoProfileDataFound message={vender} /> : <ShowProBottmSheet vender={vender} setModalImage={setModalImage} /> : <ShowProBottmSheetSclotan />
                    }
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },

});
export default ShowmMainProductScreen