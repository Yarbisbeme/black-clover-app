import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, View, StatusBar } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          },
          default: {
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#121212',
          },
        }),
      }}
    >
        <Tabs.Screen
          name="About"
          options={{  
            title: 'About',
            tabBarIcon: ({ color }) => 
              <MaterialIcons size={28} name="movie-filter" color={color} />,
          }}
        />
          <Tabs.Screen
            name="Inspiration"
            options={{
              title: 'Inspiration',
              tabBarIcon: ({ color }) => 
                <FontAwesome5 name="brain" size={24} color={color} />,
            }}
          />
        <Tabs.Screen
          name="Moments"
          options={{
            title: 'Moments',
            tabBarIcon: ({ color }) => 
              <AntDesign name="star" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Characters"
          options={{
            title: 'Characters',
            tabBarIcon: ({ color }) => 
              <FontAwesome5 name="users" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Contratame"
          options={{
            title: 'Contratame',
            tabBarIcon: ({ color }) => <Entypo name="briefcase" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="juego"
          options={{
            title: 'Game',
            tabBarIcon: ({ color }) => <Entypo name="game-controller" size={24} color={color} />,
          }}
        />
      </Tabs>
  );
}
