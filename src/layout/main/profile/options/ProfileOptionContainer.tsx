import { View} from 'react-native'
import React from 'react'
import ProMainOptionCard from '../../../../components/main/profile/elements/ProMainOptionCard'

const ProfileOptionContainer = ({ options }: any) => {
    return (
        <View className='flex bg-[#dadfe4] rounded-3xl px-4 py-1 gap-3'>
            {
                options.map((option: any, index: number) => (
                    <ProMainOptionCard key={index} option={option} />
                ))
            }
        </View>
    )
}

export default ProfileOptionContainer