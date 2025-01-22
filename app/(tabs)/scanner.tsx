import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import { Animated, StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "expo-router";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HapticTab } from "@/components/HapticTab";
import { darkTheme, lightTheme } from "@/constants/Colors";
import { SymbolView } from "expo-symbols";

export default function ScannerScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const cameraDevice = useCameraDevice("back");
  const bottomSheetRef = useRef(null);
  const frameHeight = useRef(new Animated.Value(0.55)).current;
  const [torch, setTorch] = useState<"on" | "off">("off");
  const [isTextScanner, setIsTextScanner] = useState(false);

  useEffect(() => {
    Animated.timing(frameHeight, {
      toValue: isTextScanner ? 0.55 : 0.25,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isTextScanner]);

  const codeScanner = useCodeScanner({
    codeTypes: ["code-128"],
    onCodeScanned: async () => {},
  });

  if (!cameraDevice) {
    return null;
  }

  const toggleFlash = () => {
    setTorch((prev) => (prev === "off" ? "on" : "off"));
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Camera
          ref={cameraRef}
          device={cameraDevice}
          isActive
          style={StyleSheet.absoluteFill}
          codeScanner={codeScanner}
          torch={torch}
          photo={isTextScanner}
        />
        <View style={styles.frameContainer}>
          <Animated.View
            style={[
              styles.frameBody,
              {
                height: frameHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          >
            <View style={styles.frameBodyTop}>
              <View style={styles.frameTopLeft} />
              <View style={styles.frameTopRight} />
            </View>
            <View style={styles.frameBodyBottom}>
              <View style={styles.frameBottomLeft} />
              <View style={styles.frameBottomRight} />
            </View>
          </Animated.View>
        </View>
        <View style={styles.toggleGroupContainer}>
          <HapticTab
            style={[
              styles.toggleButton,
              !isTextScanner && styles.toggleButtonActive,
            ]}
            onPress={() => setIsTextScanner(false)}
          >
            <Text
              style={[
                styles.toggleButtonText,
                !isTextScanner && styles.toggleButtonTextActive,
              ]}
            >
              Barcode
            </Text>
          </HapticTab>
          <HapticTab
            style={[
              styles.toggleButton,
              isTextScanner && styles.toggleButtonActive,
            ]}
            onPress={() => setIsTextScanner(true)}
          >
            <Text
              style={[
                styles.toggleButtonText,
                isTextScanner && styles.toggleButtonTextActive,
              ]}
            >
              Product Label
            </Text>
          </HapticTab>
        </View>
        <View style={styles.scannerControlsContainer}>
          <HapticTab
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <SymbolView
              name="arrow.left"
              size={26}
              resizeMode="scaleAspectFill"
              tintColor="black"
            />
          </HapticTab>
          {isTextScanner && (
            <HapticTab style={styles.photoButton} onPress={() => {}}>
              <View style={styles.photoButtonCenter} />
            </HapticTab>
          )}
          <HapticTab style={styles.flashButton} onPress={toggleFlash}>
            <SymbolView
              name={torch === "on" ? "bolt" : "bolt.slash"}
              size={26}
              resizeMode="scaleAspectFill"
              tintColor="black"
            />
          </HapticTab>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={["50%", "90%"]}
          enablePanDownToClose
          handleIndicatorStyle={{ backgroundColor: theme.accent }}
          backgroundStyle={[
            styles.bottomSheetContainer,
            { backgroundColor: theme.tabBarBackground },
          ]}
        >
          <BottomSheetView style={styles.bottomSheetContent}>
            <Text>BottomSheetView</Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scannerCameraControls: {
    flexDirection: "row",
    gap: 20,
  },
  scannerControlsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  backButton: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "#F5F5F7",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButton: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "#F5F5F7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  photoButtonCenter: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderColor: "#121212",
    borderWidth: 2,
  },
  scannerModeButton: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "#D5D7DF",
    justifyContent: "center",
    alignItems: "center",
  },
  flashButton: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "#F5F5F7",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheetContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  bottomSheetContainer: {
    borderRadius: 20,
  },
  productNutriGrade: {
    height: 50,
  },
  productContainer: {
    alignItems: "flex-start",
  },
  productHeader: {
    flexDirection: "row",
    gap: 10,
  },
  productHeaderInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  productImage: {
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productBrand: {
    fontSize: 18,
    color: "gray",
  },
  productIngredientsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  productIngredients: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
  },
  closeButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 10,
  },
  frameContainer: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  frameBody: {
    width: "75%",
    height: "55%",
    flexDirection: "column",
  },
  frameBodyTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
  },
  frameTopLeft: {
    width: 50,
    height: 50,
    borderTopWidth: 5,
    borderTopColor: "white",
    borderLeftWidth: 5,
    borderLeftColor: "white",
    borderTopLeftRadius: 15,
    opacity: 0.5,
  },
  frameTopRight: {
    width: 50,
    height: 50,
    borderTopWidth: 5,
    borderTopColor: "white",
    borderRightWidth: 5,
    borderRightColor: "white",
    borderTopRightRadius: 15,
    opacity: 0.5,
  },
  frameBodyBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
  },
  frameBottomLeft: {
    width: 50,
    height: 50,
    borderBottomWidth: 5,
    borderBottomColor: "white",
    borderLeftWidth: 5,
    borderLeftColor: "white",
    borderBottomLeftRadius: 15,
    opacity: 0.5,
  },
  frameBottomRight: {
    width: 50,
    height: 50,
    borderBottomWidth: 5,
    borderBottomColor: "white",
    borderRightWidth: 5,
    borderRightColor: "white",
    borderBottomRightRadius: 15,
    opacity: 0.5,
  },
  toggleGroupContainer: {
    position: "absolute",
    top: 60,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#121212",
    borderRadius: 10,
    padding: 4,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  toggleButtonActive: {
    backgroundColor: "#F5F5F7",
  },
  toggleButtonText: {
    fontSize: 12,
    color: "#F5F5F7",
    fontWeight: "500",
  },
  toggleButtonTextActive: {
    color: "#121212",
    fontWeight: "600",
  },
});
