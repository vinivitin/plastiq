import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
    </View>
  );
}
