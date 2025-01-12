import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View, Platform } from "react-native";

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
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 5,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            paddingTop: 10,
            borderTopWidth: 0,
            height: 100,
            backgroundColor: "#FFFFFF",
          },
          android: {
            paddingTop: 10,
            height: 100,
            borderTopWidth: 0,
            backgroundColor: "#FFFFFF",
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
          tabBarStyle: { display: "none" },
          tabBarButton: ({ onPress }) => {
            return (
              <HapticTab
                onPress={onPress}
                style={styles.scannerButtonContainer}
              >
                <View style={styles.scannerButtonControl}>
                  <Ionicons name="scan-outline" size={28} color="white" />
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
          sceneStyle: {
            backgroundColor: "#F7F7F7",
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={28} color={color} />
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
});
