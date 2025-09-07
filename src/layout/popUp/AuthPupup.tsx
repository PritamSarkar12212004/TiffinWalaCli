import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import FIcon from '../icon/FIcon';

const AuthPupup = ({ popUp, setPopUp }: any) => {
    return (
        <Modal animationIn={"fadeIn"} animationOut={"fadeIn"} isVisible={popUp.isVisible} style={{ flex: 1 }}>
            <View className='flex-1 flex items-center justify-center '>
                <View className=' w-96 h-96 gap-5 bg-white rounded-[50px] shadow-slate-800 blur-xl flex items-center justify-between p-5'>
                    <View className='w-28 h-28 rounded-full bg-[#FF4759] flex items-center justify-center shadow-lg'>
                        <FIcon size={40} name="ban" color="white" />
                    </View>
                    <View className='w-full flex items-center justify-center gap-5 px-7'>
                        <Text className='text-3xl font-extrabold text-center text-[#FF4759]'>Error</Text>
                        <Text className='text-center text-sm text-zinc-600'>{popUp.message}</Text>
                        <TouchableOpacity className='w-full h-14 bg-[#FF4759] rounded-3xl flex items-center justify-center shadow-lg' onPress={() => setPopUp({
                            isVisible: false,
                            message: '',
                        })}>
                            <Text className='text-white text-center text-2xl font-semibold'>close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal >
    )
}

export default AuthPupup