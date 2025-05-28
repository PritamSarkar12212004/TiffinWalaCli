import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const DistanceCateDash = () => {
    const [selected, setSelected] = useState(1)
    const [distance, selecetedDistance] = useState('5 KM')
    const options = [
        {
            id: 1,
            name: '2 KM',
            icon: '2'
        },
        {
            id: 2,
            name: '5 KM',
            icon: '5'
        },
        {
            id: 3,
            name: '10 KM',
            icon: '10'
        },
        {
            id: 3,
            name: '15 KM',
            icon: '15'
        },

    ]
    return (
        <View className='w-full flex '>
            <View className='w-full flex flex-row items-center justify-between'>
                <Text className='text-xl font-semibold '>Distance</Text>
            </View>
            <View className='w-full flex flex-row '>
                <ScrollView className='w-full flex py-3 ' horizontal showsHorizontalScrollIndicator={false}>
                    {
                        options.map((item, index) => (
                            <TouchableOpacity onPress={() => selecetedDistance(item.name)} activeOpacity={0.8} key={index} className='p-2 flex flex-row items-center gap-5  mr-5 rounded-3xl' style={{ backgroundColor: distance == item.name ? "#FFD27C" : null }}    >
                                <View className='h-24 w-24 rounded-full flex items-center justify-center'>
                                    <Text className='text-xl font-bold '>
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