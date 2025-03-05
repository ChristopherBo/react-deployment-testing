import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              height: 80,
          },
        }),
      }}>
        <Tabs.Screen
            name="index"
            options={{
                title: 'League',
                tabBarIcon: ({ color }) => <IconSymbol size={35} name="trophy.fill" color={"#00aaff"} />,
            }}
        />
        <Tabs.Screen
            name="Scores"
            options={{
                title: 'Scores',
                tabBarIcon: ({ color }) => <IconSymbol size={35} name="football.fill" color={"#00aaff"} />,
            }}
        />
        <Tabs.Screen
            name="Profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <IconSymbol size={35} name="person.fill" color={"#00aaff"} />,
            }}
        />
    </Tabs>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    }
})