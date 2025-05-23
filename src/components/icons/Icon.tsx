import FontAwesome6 from '@react-native-vector-icons/fontawesome6';


const Icon = ({ name,size }: any) => {
    return (
        <FontAwesome6 name={name} iconStyle="solid" color={'gray'} size={size} />
    )
}

export default Icon