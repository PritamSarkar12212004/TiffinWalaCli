import { View, Text } from 'react-native'
import React from 'react'
import DashBoardCard from '../../../../components/main/dashBoard/card/DashBoardCard'

const DashBoardCarsdlayout = ({ mainData }) => {
    return (
        <View className='w-full flex  gap-3 mb-20'>
            <Text className='text-xl font-semibold '>Open Restaurants</Text>
            <View className='w-full flex gap-10'>
                {
                    mainData.map((item, index) => (
                        <DashBoardCard key={index} item={item} />
                    ))
                }
            </View>
        </View>
    );
};

export default DashBoardCarsdlayout