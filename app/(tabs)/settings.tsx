import { SafeAreaView, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SettingsScreen() {
  return (
    <LinearGradient colors={["#cbcbd5", "#fafafa"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={styles.header}>Settings</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
});
