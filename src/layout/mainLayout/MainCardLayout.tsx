import { View, FlatList } from 'react-native';
import React from 'react';
import MainItemRenderCard from '../../components/cards/mainScreen/MainItemRenderCard';

const MainCardLayout = ({ mainData }: any) => {
    return (
        <View className='w-full flex items-center'>
            <FlatList
                data={mainData}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => <MainItemRenderCard item={item} />}
            />
        </View>
    );
};

export default MainCardLayout;
