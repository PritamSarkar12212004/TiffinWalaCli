import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SetproNevigation from '../../components/setProfile/navigation/SetproNevigation'
import InputField from '../../components/setProfile/inputfildes/InputField'
import FIcon from '../../layout/icon/FIcon'
import SingleImgPicker from '../../functions/image/SingleImgPicker'
import ImageConstant from '../../constants/image/ImageConstant'
import { useNavigation, useRoute } from '@react-navigation/native'
import useCreateProfile from '../../hooks/setProfile/useCreateProfile'
import CreateProfileButton from '../../components/setProfile/buttons/CreateProfileButton'
import AuthPupup from '../../layout/popUp/AuthPupup'
import { NavigationProp } from '../../types/navigation'
const CreateProfile = () => {
    const navigation = useNavigation<NavigationProp>()
    const route = useRoute()
    const location = route.params?.location as any
    const phone = route.params?.phone as any
    // information state
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [image, setImage] = useState<string>("")

    // auth popup state
    const [popUp, setPopUp] = useState<{
        isVisible: boolean,
        message: string
    }>({
        isVisible: false,
        message: ''
    })
    const genderOption = [
        {
            icons: "mars",
            name: "Male"
        },
        {
            icons: "venus",
            name: "Female"
        },
        {
            icons: "transgender",
            name: "Other"
        },
    ]
    const selectimage = () => {
        SingleImgPicker({ setImage })
    }
    const { createProfile } = useCreateProfile()
    const profileCreater = (setLoading: any) => {
        createProfile({
            name,
            email,
            bio,
            location,
            image,
            phone,
            gender,
            setPopUp,
            setLoading,
            navigation
        })
    }
    return (
        <View className='flex-1 bg-white pt-3'>
            <SetproNevigation />
            <ScrollView className='flex-1 mt-5 px-4' showsVerticalScrollIndicator={false}>
                <AuthPupup popUp={popUp} setPopUp={setPopUp} />
                <View className='flex-1 mt-10'>
                    <View className='w-full flex items-center justify-center gap-3'>
                        <TouchableOpacity onPress={() => selectimage()} activeOpacity={0.8} className='w-64 h-72 bg-zinc-400 rounded-[40px]'>
                            {
                                image ? <Image source={{ uri: image }} className='w-full h-full rounded-[40px]' /> : <Image source={
                                    ImageConstant.SetprofileNoImg
                                } className='w-full h-full rounded-[40px]' />
                            }
                        </TouchableOpacity>
                        <Text className='text-xl font-semibold'>
                            {name ? name : "Set your profile picture"}
                        </Text>
                    </View>
                    <View className='w-full flex gap-4 mt-10'>
                        <InputField title='Name' placeholder='Enter your name' setinput={setName} />
                        <InputField title='Email (optional)' placeholder='Enter your email' setinput={setEmail} />
                        <InputField title='Bio' placeholder='write bio' setinput={setBio} />
                        <View className='w-full   mt-4'>
                            <Text className='text-xl font-semibold text-zinc-700'>Gender</Text>
                            <View className="w-full flex-row items-center justify-between gap-3 mt-2">
                                {genderOption.map((item, index) => {
                                    const isSelected = gender === item.name;
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => setGender(item.name)}
                                            activeOpacity={0.9}
                                            className={`flex-1 flex-row items-center justify-center px-4 py-3 rounded-2xl shadow-sm 
          ${isSelected ? 'bg-[#FF7622]' : 'bg-zinc-100 border border-zinc-300'}`}
                                        >
                                            <FIcon
                                                name={item.icons}
                                                size={24}
                                                color={isSelected ? 'white' : '#555'}
                                            />
                                            <Text
                                                className={`ml-2 text-base font-semibold ${isSelected ? 'text-white' : 'text-zinc-700'
                                                    }`}
                                            >
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>

                        </View>
                    </View>
                    <View className='w-full mt-10 mb-48 '>
                        <CreateProfileButton profileCreater={profileCreater} content='Create Profile' />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CreateProfile