import { Tabs } from "expo-router";
import React from "react";
import { Platform, useColorScheme } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { darkTheme, lightTheme } from "@/constants/Colors";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarButton: HapticTab,
        tabBarActiveTintColor:
          route.name === "scanner"
            ? theme.activeIconColor
            : theme.activeIconColor,
        tabBarInactiveTintColor:
          route.name === "scanner"
            ? theme.inactiveIconColor
            : theme.inactiveIconColor,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            borderTopWidth: 0,
            backgroundColor: theme.tabBarBackground,
          },
          android: {
            borderTopWidth: 0,
            backgroundColor: theme.tabBarBackground,
          },
          default: {},
        }),
      })}
    >
      <Tabs.Screen
        name="index"
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <Octicons name="home" size={30} color={color} />;
          },
        })}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: "Scanner",
          lazy: false,
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => {
            return <Octicons name="plus" size={30} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={() => ({
          title: "Settings",
          lazy: false,
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <Octicons name="person" size={30} color={color} />;
          },
        })}
      />
    </Tabs>
  );
}
