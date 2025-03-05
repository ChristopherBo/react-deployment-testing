import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message'

import { useColorScheme } from '@/hooks/useColorScheme';
import {PaperProvider} from "react-native-paper";
import Header from "@/components/Header";
import toastConfig from "@/toastConfig";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Montserrat': require('@expo-google-fonts/montserrat/Montserrat_400Regular.ttf'),
    'MontserratBold': require('@expo-google-fonts/montserrat/Montserrat_700Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <PaperProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Header notifications={undefined}/>
          <Stack>
            <Stack.Screen name="(main)/(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <Toast
              position="top"
              config={toastConfig}
              visibilityTime={5000}
          />
          <StatusBar style="auto" />
        </ThemeProvider>
      </PaperProvider>
  );
}
