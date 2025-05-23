import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../icons/Icon'


const PostProductProfileEmptyCard = () => {
    return (
        <View className='flex-1 items-center justify-center '>
            <View className='bg-zinc-800 rounded-2xl p-6 w-full items-center'>
                <View className='w-20 h-20 bg-zinc-700 rounded-full items-center justify-center mb-4'>
                    <Icon name="bell" size={30} />
                </View>
                <Text className='text-white text-xl font-bold mb-2 text-center'>No Posts Yet</Text>
                <Text className='text-zinc-400 text-center mb-6'>Share your delicious tiffin service with the world</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    // onPress={() => router.push("/(main)/(product)/NewPost" as never)}
                    className='bg-[#FFD700] py-3 px-6 rounded-full flex-row items-center'
                >
                    <Text className='text-black font-bold ml-2'>Create First Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostProductProfileEmptyCard