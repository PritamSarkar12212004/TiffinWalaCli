import React from 'react'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
const FIcon = ({ size, name, color }: any) => {
    return <FontAwesome6 name={name} color={color} size={size} iconStyle="solid" />

}

export default FIcon