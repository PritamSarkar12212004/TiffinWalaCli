import { View} from 'react-native'
import React from 'react'
import ProMainOptionCard from '../../../../components/main/profile/elements/ProMainOptionCard'

const ProfileOptionContainer = ({ options }: any) => {
    return (
        <View className='flex bg-white rounded-3xl px-4 py-2 gap-1 shadow-md shadow-black/5 border border-black/5'>
            {
                options.map((option: any, index: number) => (
                    <ProMainOptionCard key={index} option={option} />
                ))
            }
        </View>
    )
}

export default ProfileOptionContainer