import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, FlatList, StyleSheet } from 'react-native'
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
const { width } = Dimensions.get('window');
const ShowmMainProductScreen = () => {
    const [fevirote, setIsFavorite] = useState<any>(null)
    const { userInfo } = userContext()
    const route = useRoute()
    const data = route.params.item
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const [showMenu, setShowMenu] = useState(true)
    const [vender, setVender] = useState<any>(null)

    const renderItem = ({ item }) => {
        return (
            <View style={{ width, height: 384 }}>
                <Image
                    source={{ uri: item }}

                    className='rounded-b-3xl w-full h-full'
                />
            </View>
        );
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return data.postCoverImage.map((_, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        flatListRef.current.scrollToIndex({ index, animated: true });
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
    const { viewsProduct } = useViewsProductApi()
    const { fetchUserData } = useUserFetchData()
    const { likeProductFetch } = useLikeproduct()
    useEffect(() => {
        viewsProduct(data._id);
        fetchUserData(data.postVendorId, setVender)
        likeProductFetch(userInfo.userinfo, data._id, setIsFavorite)
        return () => {
            setVender(null)
        }
    }, [])
    return (
        <GestureHandlerRootView style={styles.container}>
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
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
                                    <Text className='text-2xl font-semibold'>{data.postTitle}</Text>
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
                                            data.postFoodType.map((item, index) => (
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
                                            data.postValidDay.map((item, index) => (
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
                                        showMenu ? <View className='w-full flex '>
                                            {
                                                data.postMenu.map((item, index) => (
                                                    <View key={index} className='w-full flex gap-1   '>
                                                        <Image source={{ uri: item.image }} className='rounded-2xl' style={{ width: "100%", aspectRatio: 2 / 1 }} />
                                                        <View className='w-fill flex px-2'>
                                                            <Text className='text-lg font-semibold text-wrap'>
                                                                {item.title}
                                                            </Text>
                                                            <Text className='text-sm text-gray-500 text-wrap'>
                                                                {item.description}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                ))
                                            }
                                        </View>
                                            : null
                                    }
                                </View>
                                <View className='w-full flex '>
                                    <TouchableOpacity onPress={() => openBottomSheet()} activeOpacity={0.8} className='w-full flex h-20 bg-[#FFD27C] rounded-3xl flex items-center justify-center'>
                                        <Text className='text-xl font-semibold'>
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
                        vender?.message ? <NoProfileDataFound message={vender} /> : <ShowProBottmSheet vender={vender} />
                    }
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },

});
export default ShowmMainProductScreen