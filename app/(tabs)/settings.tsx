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
import { HapticTab } from "@/components/HapticTab";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <LinearGradient
      colors={[theme.screenGradientStart, theme.screenGradientEnd]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={[styles.header, { color: theme.accent }]}>Settings</Text>
          <View style={styles.content}>
            <Text style={[styles.title, { color: theme.accent }]}>Legal</Text>
            <View style={styles.listGroup}>
              <HapticTab style={styles.listItem}>
                <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                  Terms and Conditions
                </Text>
                <Ionicons name="arrow-forward" size={21} color={theme.accent} />
              </HapticTab>
              <HapticTab style={styles.listItem}>
                <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                  Privacy Policy
                </Text>
                <Ionicons name="arrow-forward" size={21} color={theme.accent} />
              </HapticTab>
              <HapticTab style={styles.listItem}>
                <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                  Support Email
                </Text>
                <Ionicons name="arrow-forward" size={21} color={theme.accent} />
              </HapticTab>
              <HapticTab style={styles.listItem}>
                <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                  Delete Account
                </Text>
                <Ionicons name="arrow-forward" size={18} color={theme.accent} />
              </HapticTab>
            </View>
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
  /* list item */
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemTitle: {
    fontSize: 18,
  },
  listGroup: {
    flexDirection: "column",
    gap: 30,
  },
});
