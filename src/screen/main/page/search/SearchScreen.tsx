import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
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
    const [, setLoading] = useState<any>(false)
    const { searchEngine } = useSearchEngine()
    const [input, setInput] = useState<any>('')
    const debounceTimer = useRef<NodeJS.Timeout | null>(null)
    const handleinput = (valu: any) => {
        setInput(valu)
        if (debounceTimer.current) clearTimeout(debounceTimer.current)
        debounceTimer.current = setTimeout(() => {
            searchEngine(location, valu?.trim?.() ?? valu, setResults, setLoading, distance)
        }, 450)
    }
    const { top3ProductFinder } = useTopProductFetch()
    useEffect(() => {
        setLocation(userInfo.location)
        top3ProductFinder({ setTop3Product: setTop3Product, location: userInfo.location, distance: distance })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <View className='flex-1 bg-white px-3 pt-2'>
            <NavigationProfile path='Search' option='' />
            <ScrollView className='flex-1 ' showsVerticalScrollIndicator={false}>
                <View className='flex-1 pt-4 flex gap-4'>
                    <View className='w-full bg-gray-100 h-14 rounded-3xl flex flex-row px-5 items-center shadow-sm border border-black/5'>
                        <View className='h-full flex justify-center mr-3'>
                            <FIcon name='magnifying-glass' color='black' size={20} />
                        </View>
                        <View className='flex-auto flex-1'>
                            <TextInput onChangeText={(text) => handleinput(text)} value={input} className='h-full text-base font-semibold text-black placeholder:text-gray-500 w-full' placeholder="Search for food, restaurants..."
                            />
                        </View>
                        {
                            input ? <TouchableOpacity onPress={() => handleinput('')} activeOpacity={0.9} className='h-8 w-8 rounded-full bg-black/10 flex items-center justify-center'>
                                <FIcon name='xmark' color='black' size={16} />
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