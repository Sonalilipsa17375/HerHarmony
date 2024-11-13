import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome, MaterialIcons, Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "HerHarmony",
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white-smoke', 
        },
        headerTintColor: '#ff69b4', 
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#ff69b4',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen 
        name="Period" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
          title: 'Track Periods',
        }} 
      />
      <Tabs.Screen 
        name="SymptomsFinder" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" size={size} color={color} />
          ),
          title: 'Symptoms Finder',
        }} 
      />
      <Tabs.Screen 
        name="Ai" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="light-bulb" size={size} color={color} />
          ),
          title: 'AI Help',
        }} 
      />
      <Tabs.Screen 
        name="Profile" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
          title: 'Profile',
        }} 
      />
    </Tabs>
  );
};

export default Tablayout;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black',
    height: 60, 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 7,
  },
});
