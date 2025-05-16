import { View } from 'react-native'
import React from 'react'
import ErrorOpoup from '../../components/popup/ErrorOpoup'
import { userContext } from '../../context/ContextApi';
const PopUpWraper = ({ children }: any) => {
    const { popup } = userContext();
    return (
        <View className='h-full w-full  relative'>
            {
                children
            }
            {
                popup.status && (
                    <View className='w-full h-full flex items-center justify-center absolute top-0 bg-black opacity-80 backdrop-blur-xl'>
                        {
                            popup.type === "error" ? (
                                <ErrorOpoup />
                            ) : (
                                <ErrorOpoup />
                            )
                        }
                    </View>
                )
            }
        </View>
    )
}

export default PopUpWraper