import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated'

interface SnackbarProps {
  duration?: number
  message: string
}

const Snackbar = ({ duration = 3000, message }: SnackbarProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (message) {
      setVisible(true)

      const timer = setTimeout(() => {
        setVisible(false)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [message, duration])

  return visible ? (
    <Animated.View
      entering={FadeInDown.duration(300)}
      exiting={FadeOutDown.duration(300)}
      className="absolute bg-gray-800 dark:bg-gray-600 bottom-5 left-5 right-5 rounded-md p-4 shadow-black shadow-md"
    >
      <Text className="text-white text-base">{message}</Text>
    </Animated.View>
  ) : null
}
export default Snackbar
