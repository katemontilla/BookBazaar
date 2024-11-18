import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native-web'

const AuthLayout = () => {
  return (
    <>
    <Stack>
        <Stack.Screen
          name="login"
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="signup"
          options={{headerShown:false}}
        />
    </Stack>
    <StatusBar backgroundColor="#D07474" style="light"/>
    </>
  )
}

export default AuthLayout