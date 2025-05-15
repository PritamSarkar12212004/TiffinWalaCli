import { View, Text, KeyboardAvoidingView, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import LogoContant from '../../constant/image/LogoContant'
import BgColor from '../../constant/style/BgColor'

const SignupScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
            style={{ backgroundColor: BgColor.Primary }}
        >
            {/* <LoadingModal visible={isLoading} /> */}
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="flex-1 py-6 px-4">
                    {/* Logo and Welcome Text */}
                    <View className="items-center mt-12 mb-16">
                        <View className="w-32 h-32 rounded-full mb-6 border-4 overflow-hidden" style={{ borderColor: BgColor.Accent }}>
                            <Image
                                source={LogoContant.logo3}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        </View>
                        <Text className="text-4xl font-bold text-white mb-3 text-center">Join TiffinWala</Text>
                        <Text className="text-zinc-400 text-center text-lg">
                            Start your journey to delicious homemade meals
                        </Text>
                    </View>

                    {/* Sign Up Form */}
                    <View className="bg-zinc-800/50 p-6 rounded-3xl shadow-2xl backdrop-blur-lg">
                        {!showOtpInput ? (
                            // Phone Number Input
                            <View>
                                <View className="mb-8">
                                    <Text className="text-zinc-400 mb-3 text-lg">Phone Number</Text>
                                    <View className="flex-row items-center bg-zinc-700/50 rounded-2xl px-4 py-4 border border-zinc-600">
                                        <Ionicons name="call-outline" size={24} color={BgColor.Accent} />
                                        <TextInput
                                            className="flex-1 ml-3 text-white text-lg"
                                            placeholder="Enter your phone number"
                                            placeholderTextColor="#666"
                                            value={phoneNumber}
                                            onChangeText={handlePhoneNumberChange}
                                            keyboardType="phone-pad"
                                            maxLength={10}
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity
                                    className="h-16 flex items-center justify-center rounded-2xl mb-6"
                                    onPress={() => isLoading ? null : handleSendOtp()}
                                    style={{ backgroundColor: BgColor.Accent }}
                                    activeOpacity={0.8}
                                >
                                    {isLoading ?
                                        <ActivityIndicator size="large" color={BgColor.Primary} /> :
                                        <Text className="text-white text-center font-bold text-lg">
                                            Send OTP
                                        </Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        ) : (
                            // OTP Verification
                            <View>
                                <View className="mb-8">
                                    <Text className="text-zinc-400 mb-3 text-lg">Enter OTP</Text>
                                    <View className="flex-row items-center bg-zinc-700/50 rounded-2xl px-4 py-4 border border-zinc-600">
                                        <Ionicons name="key-outline" size={24} color={BgColor.Accent} />
                                        <TextInput
                                            className="flex-1 ml-3 text-white text-lg"
                                            placeholder="Enter 6-digit OTP"
                                            placeholderTextColor="#666"
                                            value={otp}
                                            onChangeText={setOtp}
                                            keyboardType="number-pad"
                                            maxLength={6}
                                        />
                                    </View>
                                    {otpSent && (
                                        <Text className="text-green-400 text-base mt-3">
                                            OTP sent to {phoneNumber}
                                        </Text>
                                    )}
                                </View>

                                <TouchableOpacity
                                    className="h-16 flex items-center justify-center rounded-2xl mb-6"
                                    onPress={() => isLoading ? null : handleVerifyOtp()}
                                    style={{ backgroundColor: BgColor.Accent }}
                                    activeOpacity={0.8}
                                >
                                    {isLoading ?
                                        <ActivityIndicator size="large" color={BgColor.Primary} /> :
                                        <Text className="text-white text-center font-bold text-lg">
                                            Verify OTP
                                        </Text>
                                    }
                                </TouchableOpacity>

                                <TouchableOpacity
                                    className="flex-row justify-center items-center mb-6"
                                    onPress={() => setShowOtpInput(false)}
                                    activeOpacity={0.8}
                                >
                                    <Ionicons name="arrow-back" size={24} color={BgColor.Accent} />
                                    <Text className="text-zinc-400 ml-2 text-base">Change phone number</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        <View className="flex-row justify-center">
                            <Text className="text-zinc-400 text-base">Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
                                <Text className="text-blue-400 font-bold text-base">Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Tiffin Mess Benefits */}
                    <View className="mt-12">
                        <Text className="text-2xl font-bold text-white mb-6 text-center">Why Choose TiffinWala?</Text>
                        <View className="flex gap-4">
                            <View className="flex-row items-center bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700">
                                <Ionicons name="checkmark-circle-outline" size={28} color={BgColor.Accent} />
                                <View className="ml-4 flex-1">
                                    <Text className="text-white font-semibold text-lg">Fresh & Homemade</Text>
                                    <Text className="text-zinc-400 text-base">Daily fresh food made with love</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700">
                                <Ionicons name="checkmark-circle-outline" size={28} color={BgColor.Accent} />
                                <View className="ml-4 flex-1">
                                    <Text className="text-white font-semibold text-lg">Flexible Plans</Text>
                                    <Text className="text-zinc-400 text-base">Choose your meal plan</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700">
                                <Ionicons name="checkmark-circle-outline" size={28} color={BgColor.Accent} />
                                <View className="ml-4 flex-1">
                                    <Text className="text-white font-semibold text-lg">On-Time Delivery</Text>
                                    <Text className="text-zinc-400 text-base">Never miss your meal time</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center bg-zinc-800/50 p-6 rounded-3xl border border-zinc-700">
                                <Ionicons name="checkmark-circle-outline" size={28} color={BgColor.Accent} />
                                <View className="ml-4 flex-1">
                                    <Text className="text-white font-semibold text-lg">Healthy Options</Text>
                                    <Text className="text-zinc-400 text-base">Balanced and nutritious meals</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen