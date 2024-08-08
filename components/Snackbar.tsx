import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

interface SnackbarProps {
  duration?: number
  message: string
}

const Snackbar = ({ duration = 3000, message }: SnackbarProps) => {
  const [visible, setVisible] = useState(false)
  const opacity = useSharedValue(0)
  const translateY = useSharedValue(50)

  useEffect(() => {
    if (message) {
      setVisible(true)

      const timer = setTimeout(() => {
        setVisible(false)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [message, opacity, translateY, duration])

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }]
  }))

  return visible ? (
    <Animated.View
      entering={FadeInDown.duration(300)}
      exiting={FadeOutDown.duration(300)}
      className="absolute bottom-5 left-5 right-5 rounded-md py-3 px-4 shadow-black shadow-md"
      style={animatedStyles}
    >
      <Text className="text-white text-sm font-medium">{message}</Text>
    </Animated.View>
  ) : null
}
export default Snackbar
