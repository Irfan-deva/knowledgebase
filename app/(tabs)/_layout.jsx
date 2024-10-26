import React, { useState } from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
// import TabBar from '../../components/TabBar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import useTabBarVisibility from '../../hooks/useTabBarVisibility'
// import Animated from 'react-native-reanimated'

const TabLayout = () => {
  // const { isTabBarVisible } = useTabBarVisibility();
  return (
    <SafeAreaProvider>
      <Tabs

        // tabBar={props => <TabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: '#000',

          headerShown: false,

        }}>
        <Tabs.Screen name='home'

          options={{

            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Ionicons name='home' size={24} color={color}

            />
          }}
        />
        <Tabs.Screen name='updates'

          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => <Ionicons name='people-circle' size={24} color={color} />

          }} />


      </Tabs>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  )
}

export default TabLayout