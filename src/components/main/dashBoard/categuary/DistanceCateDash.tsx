import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import DistanceData from '../../../../data/dashBoard/distance/DistanceData'

const DistanceCateDash = ({ distance, selecetedDistance, setPageLoader, pageLoader }: any) => {
    const handelChange = (item: any) => {
        selecetedDistance(item)
        setPageLoader(!pageLoader)
    }
    return (
        <View className='w-full flex '>
            <View className='w-full flex flex-row items-center justify-between'>
                <Text className='text-lg font-semibold '>Distance</Text>
            </View>
            <View className='w-full flex flex-row '>
                <ScrollView className='w-full flex py-3 ' horizontal showsHorizontalScrollIndicator={false}>
                    {
                        DistanceData.map((item, index) => (
                            <TouchableOpacity onPress={() => handelChange(item)} activeOpacity={0.8} key={index} className='p-1 flex flex-row items-center gap-5  mr-5 rounded-3xl' style={{ backgroundColor: distance == item ? "#FFD27C" : "#F3F2EC" }}    >
                                <View className='h-12 w-24 rounded-full flex items-center justify-center'>
                                    <Text className='text-lg font-bold '>
                                        {
                                            item.name
                                        }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View >
        </View >
    )
}

export default DistanceCateDash