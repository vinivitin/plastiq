import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View, Platform, useColorScheme, Text } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import Ionicons from "@expo/vector-icons/Ionicons";
import { darkTheme, lightTheme } from "@/constants/Colors";

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
        headerShown: true,
        headerTitleAlign: "left",
        tabBarLabelStyle: {
          fontSize: 16,
          marginTop: 5,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            paddingTop: 10,
            borderTopWidth: 0,
            height: 90,
            backgroundColor: theme.tabBarBackground,
          },
          android: {
            paddingTop: 10,
            height: 90,
            borderTopWidth: 0,
            backgroundColor: theme.tabBarBackground,
          },
          default: {},
        }),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: "Scanner",
          lazy: false,
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarButton: ({ onPress }) => {
            return (
              <HapticTab
                onPress={onPress}
                style={styles.scannerButtonContainer}
              >
                <View
                  style={[
                    styles.scannerButtonControl,
                    { backgroundColor: theme.scannerButtonBackground },
                  ]}
                >
                  <Ionicons
                    name="scan-outline"
                    size={36}
                    color={theme.scannerIconColor}
                  />
                </View>
              </HapticTab>
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  scannerButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  scannerButtonControl: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    top: -35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  glowEffect: {
    position: "absolute",
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "rgba(213, 215, 223, 0.2)",
    top: -35,
  },
});
