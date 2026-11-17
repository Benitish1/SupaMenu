import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  // The tab bar is orange in both light and dark mode (each screen paints its own status bar).
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
          tabBarStyle: { backgroundColor: Colors.primary, borderTopWidth: 0, elevation: 0 },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <>
                <MaterialIcons name="home" size={35} color={color as string} />
                {/* <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color as string} /> */}
              </>
            ),
          }} />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="notifications" size={35} color={color as string} />
            ),
          }} />
        <Tabs.Screen
          name="restaurants"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="hotel" size={24} color={color as string} />
            ),
          }} />
        <Tabs.Screen
          name="orders"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="timeline" size={35} color={color as string} />
            ),
          }} />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="shopping-cart" size={35} color={color as string} />
            ),
          }} />
      </Tabs></>
  );
}
