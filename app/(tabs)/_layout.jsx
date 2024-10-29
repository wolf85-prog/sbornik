import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              icon={icons.home}
              name={focused ? 'code-slash' : 'code-slash-outline'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="songs"
        options={{
          title: 'Песни',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              icon={icons.profile}
              name={focused ? 'code-slash' : 'code-slash-outline'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: 'Плейлисты',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              icon={icons.profile}
              name={focused ? 'code-slash' : 'code-slash-outline'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Избранное',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              icon={icons.bookmark}
              name={focused ? 'code-slash' : 'code-slash-outline'} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Заметки',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              icon={icons.bookmark}
              name={focused ? 'code-slash' : 'code-slash-outline'} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
