import React from 'react'
import LottieView from "lottie-react-native";


const LottiAnimation = ({ path }) => {
  return (
    <LottieView
      source={path}
      style={{ width: "100%", height: 200 }}
      autoPlay

      loop
    />
  )
}

export default LottiAnimation