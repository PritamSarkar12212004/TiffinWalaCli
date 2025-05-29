import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NavigationShowProduct from '../../../../components/main/showProduct/navigation/NavigationShowProduct'
import FIcon from '../../../../layout/icon/FIcon'

const ShowmMainProductScreen = () => {
    return (
        <ScrollView className='flex-1'>
            <View className='flex-1 bg-[#F3F3F3] py-2 gap-10'>
                <View className='w-full flex  relative rounded-b-3xl'>
                    <NavigationShowProduct />
                    <View className='w-full h-96 bg-gray-300 rounded-b-3xl'></View>
                </View>
                <View className='w-full px-4 flex gap-8'>
                    <View className='w-full flex gap-1 '>
                        <Text className='text-2xl font-semibold'>Burger Bistro</Text>
                        <View className='w-full flex  flex-row gap-2'>
                            <FIcon name='location-dot' color='orange' size={20} />
                            <Text className='text-sm text-gray-500'>1000 N. 4th St. #100, Chicago, IL 60601</Text>
                        </View>
                    </View>
                    <View className='w-full flex flex-row gap-5'>
                        <View className='flex flex-row gap-1'>
                            <FIcon name='heart' color='orange' size={22} />
                            <Text className='text-lg  font-semibold'>234</Text>
                        </View>
                        <View className='flex flex-row gap-1'>
                            <FIcon name='eye' color='orange' size={22} />
                            <Text className='text-lg  font-semibold'>500</Text>
                        </View>
                        <View className='flex flex-row gap-1'>
                            <FIcon name='location-dot' color='orange' size={22} />
                            <Text className='text-lg  font-semibold'>4.5 km</Text>
                        </View>
                    </View>
                    <View className='w-full '>
                        <Text className='text-wrap text-lg flex flex-wrap text-zinc-500'>
                            Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ShowmMainProductScreen