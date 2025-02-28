
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import "../global.css"
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
  
  return (
      <Stack screenOptions={{ headerShown: false, marginTop: 4 }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Moments" />
        <Stack.Screen name="Inspiration" />
        <Stack.Screen name="About" />
        <Stack.Screen name="Characters" />
        <Stack.Screen name="Contratame" />
      </Stack>
  )
}
