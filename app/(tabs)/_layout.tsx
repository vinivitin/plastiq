import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

import { HapticTab } from "@/components/HapticTab";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarButton: HapticTab,
        tabBarActiveTintColor: route.name === "scanner" ? "white" : "black",
        tabBarInactiveTintColor: route.name === "scanner" ? "#A9A9A9" : "grey",
        headerShown: true,
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontSize: 32,
          fontWeight: "bold",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 5,
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={30}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            paddingTop: 10,
            height: 100,
            borderTopWidth: 0,
          },
          android: {
            paddingTop: 10,
            height: 100,
            borderTopWidth: 0,
          },
          default: {},
        }),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: "Scanner",
          lazy: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="scan-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
