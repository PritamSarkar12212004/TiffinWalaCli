import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import PostProductProfilecard from '../../../components/cards/profile/PostProductProfilecard';
import PostProductProfileEmptyCard from '../../../components/cards/profile/PostProductProfileEmptyCard';
import useFetchProduct from '../../../hooks/profile/useFetchProduct';

const ProfilePost = () => {
    const navigation = useNavigation()
    const { fetchProduct } = useFetchProduct()
    const [product, setProduct] = useState<any>([])
    const [totalLike, setTotalLikes] = useState<any>(0)
    const [totalViews, setTotalViews] = useState<any>(0)
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        fetchProduct({ setProduct, setLoading })
        return () => {
            setProduct([])
            setTotalLikes(0)
            setTotalViews(0)
        }
    }, [])

    return (
        <View className='w-full mb-4 '>

            <View className='flex-row items-center justify-between mb-4'>
                <View>
                    <Text className='text-white text-xl font-bold'>Your Posts</Text>
                    <Text className='text-zinc-400 text-sm'>Share your food moments</Text>
                </View>
                {
                    product.length > 0 ? <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("YourPosts" as never)} className='flex-row items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full'>
                        <Text className='text-white font-medium'>See All</Text>
                        {/* <Ionicons name="chevron-forward" size={20} color="white" /> */}
                    </TouchableOpacity> : null
                }
            </View>

            {loading ? (
                <View className="py-10 items-center justify-center">
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            ) : product.length > 0 ? (
                <ScrollView horizontal >

                    {product.slice(0, 3).map((item, index) => (
                        <View key={index} className="mb-4">
                            <PostProductProfilecard item={item} />
                        </View>
                    ))}
                </ScrollView>
            ) : (
                <PostProductProfileEmptyCard />
            )
            }
        </View >
    )
}

export default ProfilePost