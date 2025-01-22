import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { darkTheme, lightTheme } from "@/constants/Colors";
import { HapticTab } from "@/components/HapticTab";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const { top } = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          "rgba(0,0,0,1)",
          "rgba(0,0,0,0.9)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0)",
        ]}
        style={styles.overlayTop}
      />
      <LinearGradient
        colors={[
          theme.screenGradientStart,
          theme.screenGradientEnd,
          theme.screenGradientEnd,
          theme.screenGradientEnd,
        ]}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: tabBarHeight }}
        >
          <Text
            style={[
              styles.header,
              { color: theme.accent, marginTop: top + 20 },
            ]}
          >
            Settings
          </Text>
          <View style={styles.content}>
            <View>
              <Text style={[styles.title, { color: theme.accent }]}>
                Profile
              </Text>
              <View style={styles.listGroup}>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Name
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />
                </HapticTab>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Password
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />

                  {/*<Ionicons*/}
                  {/*  name="arrow-forward"*/}
                  {/*  size={18}*/}
                  {/*  color={theme.accent}*/}
                  {/*/>*/}
                </HapticTab>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Email
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />
                </HapticTab>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Sign out
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />
                </HapticTab>
              </View>
            </View>
            <View>
              <Text style={[styles.title, { color: theme.accent }]}>Legal</Text>
              <View style={styles.listGroup}>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Terms and Conditions
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />
                </HapticTab>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Privacy Policy
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />
                </HapticTab>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Support Email
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />
                </HapticTab>
                <HapticTab style={styles.listItem}>
                  <Text style={[styles.listItemTitle, { color: theme.accent }]}>
                    Delete Account
                  </Text>
                  <Octicons
                    name="chevron-right"
                    size={21}
                    color={theme.accent}
                  />
                </HapticTab>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
      <LinearGradient
        colors={[
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0.7)",
          "rgba(0,0,0,0.9)",
          "rgba(0,0,0,1)",
        ]}
        style={styles.overlayBottom}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    marginLeft: 20,
    fontFamily: "EBGaramond-Bold",
  },
  content: {
    marginTop: 30,
    marginHorizontal: 20,
    gap: 40,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "600",
  },
  /* list item */
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  listItemTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  listGroup: {
    flexDirection: "column",
    gap: 20,
  },
  overlayTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 10,
  },
  overlayBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 10,
  },
});
