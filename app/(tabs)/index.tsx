import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { darkTheme, lightTheme } from "@/constants/Colors";
import React from "react";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <LinearGradient
      colors={[theme.screenGradientStart, theme.screenGradientEnd]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={[styles.header, { color: theme.accent }]}>Home</Text>
          <View style={styles.content}>
            <Text style={[styles.title, { color: theme.accent }]}>
              Recently scanned
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
  content: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 40,
  },
});
