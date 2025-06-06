import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const AnimationLotti = ({ height, width, path, bg }: any) => {
    const animation = useRef<LottieView>(null);

    return (
        <LottieView
            autoPlay
            ref={animation}
            style={{
                width: width,
                height: height,
                backgroundColor: bg,
            }}
            source={path}
        />
    )
}

export default AnimationLotti