import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavigationProfile from '../../../../components/main/profile/navigation/NavigationProfile'
import FIcon from '../../../../layout/icon/FIcon'
import useSearchEngine from '../../../../hooks/main/search/useSearchEngine'
import { useRoute } from '@react-navigation/native'
import useTopProductFetch from '../../../../hooks/main/search/useTopProductFetch'
import { userContext } from '../../../../utils/context/ContextProvider'
import TopProduct from '../../../../components/main/dashBoard/search/TopProduct'
import ShowSearchResult from '../../../../components/main/dashBoard/search/ShowSearchResult'
import SearchTopSclaton from '../../../../skeleton/search/SearchTopSclaton'

const SearchScreen = () => {
    const route = useRoute()
    const { distance } = route.params as any
    const { userInfo } = userContext()
    const [location, setLocation] = useState<any>(null)
    const [result, setResults] = useState<any>(null)
    const [top3Product, setTop3Product] = useState<any>(null)
    const [loading, setLoading] = useState<any>(false)
    const { searchEngine } = useSearchEngine()
    const [input, setInput] = useState<any>('')
    const handleinput = (valu: any) => {
        setInput(valu)
        searchEngine(location, valu, setResults, setLoading, distance)
    }
    const { top3ProductFinder } = useTopProductFetch()
    useEffect(() => {
        setLocation(userInfo.location)
        top3ProductFinder({ setTop3Product: setTop3Product, location: userInfo.location, distance: distance })
    }, [])
    return (
        <View className='flex-1 bg-[#F3F3F3] px-3 pt-2'>
            <NavigationProfile path='Search' option='' />
            <ScrollView className='flex-1 ' showsVerticalScrollIndicator={false}>
                <View className='flex-1  pt-5  flex gap-4'>
                    <View className='w-full  flex flex-row gap-3 bg-[#A0A5BA] h-16 rounded-3xl relative px-6 '>
                        <View className='h-full flex  justify-center'>
                            <FIcon name='magnifying-glass' color='white' size={25} />
                        </View>
                        <View className='flex-auto flex-1'>
                            <TextInput onChangeText={(text) => handleinput(text)} value={input} className='h-full text-xl font-semibold text-white placeholder:text-white w-full  placeholder:text-xl' placeholder="Search for food, restaurants..."
                            />
                        </View>
                        {
                            input ? <TouchableOpacity onPress={() => setInput('')} activeOpacity={0.8} className='h-full flex  justify-center'>
                                <FIcon name='xmark' color='white' size={25} />
                            </TouchableOpacity> : null
                        }

                    </View>
                    <View className='w-full flex items-center justify-center'>
                        {
                            result ? <ShowSearchResult item={result} /> : top3Product ? <TopProduct top3Product={top3Product} /> : <SearchTopSclaton />
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SearchScreen