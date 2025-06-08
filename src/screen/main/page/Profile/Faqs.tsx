// components/Faqs.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FIcon from '../../../../layout/icon/FIcon';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <View className="mb-4 border border-gray-300 rounded-xl bg-white shadow-sm">
            <TouchableOpacity
                onPress={() => setOpen(!open)}
                className="flex-row justify-between items-center px-4 py-3"
            >
                <Text className="text-base font-semibold text-[#111E45]">{question}</Text>
                {open ? <FIcon color="#111E45" /> : <FIcon color="#111E45" />}
            </TouchableOpacity>
            {open && (
                <View className="px-4 pb-3">
                    <Text className="text-gray-600 text-sm">{answer}</Text>
                </View>
            )}
        </View>
    );
};

const Faqs = () => {
    const faqData = [
        {
            question: 'Tiffin Wala kya hai?',
            answer: 'Tiffin Wala ek mobile app hai jahan se students aur working professionals daily tiffin service book kar sakte hain.',
        },
        {
            question: 'Subscription kaise karein?',
            answer: 'Aap home screen par "Subscribe" button se apni subscription plan select karke payment kar sakte hain.',
        },
        {
            question: 'Tiffin cancel kaise karein?',
            answer: 'Tiffin cancel karne ke liye "My Orders" section me jaake cancel option select karein.',
        },
        {
            question: 'Delivery time kya hota hai?',
            answer: 'Lunch delivery timing 12:00 PM - 2:00 PM aur dinner ke liye 7:00 PM - 9:00 PM hoti hai.',
        },
        {
            question: 'Kya allergy options available hain?',
            answer: 'Haan, aap apne allergy preferences ko profile section me mention kar sakte hain.',
        },
        {
            question: 'Refund policy kya hai?',
            answer: 'Agar tiffin deliver nahi hota ya aap cancel karte hain 1 ghante pehle, full refund milega.',
        },
    ];

    return (
        <ScrollView className="px-4 py-6 bg-[#F9FAFB]">
            <Text className="text-xl font-bold text-center text-[#111E45] mb-6">Faqs - Aapke Sawalon ke Jawab</Text>
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </ScrollView>
    );
};

export default Faqs;
