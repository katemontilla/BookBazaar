import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-rose-400 rounded-3xl min-h-[62px] justify-center item-center ${containerStyles} ${isLoading ? 'opacity-50': ''} `}
    >
        <Text className={`font-pextrabold text-xl text-neutral-100 text-center ${textStyles}`}>
            {title}
        </Text>

    </TouchableOpacity>
  )
}

export default CustomButton