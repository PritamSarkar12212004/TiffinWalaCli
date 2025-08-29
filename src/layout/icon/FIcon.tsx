import React from 'react'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
const FIcon = ({ size, name, color }: {
    size: Number | any,
    name: String | any,
    color: String | any
}) => {
    return <FontAwesome6 name={name} color={color} size={size} iconStyle="solid" />

}

export default FIcon