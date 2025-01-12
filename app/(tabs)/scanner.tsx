import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useRef, useMemo } from "react";
import { useNavigation } from "expo-router";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";

export default function ScannerScreen() {
  const device = useCameraDevice("back");
  const navigation = useNavigation();
  const [torch, setTorch] = useState<"on" | "off">("off");
  const [scannedCode, setScannedCode] = useState<string | undefined>(undefined);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const codeScanner = useCodeScanner({
    codeTypes: [
      "code-128",
      "code-39",
      "code-93",
      "codabar",
      "ean-13",
      "ean-8",
      "itf",
      "itf-14",
      "upc-e",
      "upc-a",
      "qr",
      "pdf-417",
      "aztec",
      "data-matrix",
    ],
    onCodeScanned: (codes) => {
      if (codes.length > 0) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        setScannedCode(codes[0].value);
        bottomSheetRef.current?.expand();
      }
    },
  });

  if (!device) {
    return null;
  }

  const toggleFlash = () => {
    setTorch((prev) => (prev === "off" ? "on" : "off"));
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Camera
          device={device}
          isActive
          style={StyleSheet.absoluteFill}
          codeScanner={codeScanner}
          torch={torch}
        />
        <View style={styles.frameContainer}>
          <View style={styles.frameBody}>
            <View style={styles.frameBodyTop}>
              <View style={styles.frameTopLeft} />
              <View style={styles.frameTopRight} />
            </View>
            <View style={styles.frameBodyBottom}>
              <View style={styles.frameBottomLeft} />
              <View style={styles.frameBottomRight} />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
          <Ionicons
            name={torch === "on" ? "flash" : "flash-off"}
            size={28}
            color="black"
          />
        </TouchableOpacity>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose
        >
          <BottomSheetView style={styles.bottomSheetContent}>
            <Text style={styles.sheetTitle}>Product</Text>
            <Text style={styles.sheetContent}>{scannedCode}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => bottomSheetRef.current?.close()}
            >
              <Text style={styles.closeButtonText}>Закрыть</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

// 🎨 Стили
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  flashButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheetContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  sheetTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sheetContent: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  closeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
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
    width: "25%",
    height: "25%",
    borderTopWidth: 2,
    borderTopColor: "white",
    borderLeftWidth: 2,
    borderLeftColor: "white",
    borderTopLeftRadius: 15,
    opacity: 0.3,
  },
  frameTopRight: {
    width: "25%",
    height: "25%",
    borderTopWidth: 2,
    borderTopColor: "white",
    borderRightWidth: 2,
    borderRightColor: "white",
    borderTopRightRadius: 15,
    opacity: 0.3,
  },
  frameBodyBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
  },
  frameBottomLeft: {
    width: "25%",
    height: "25%",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderLeftWidth: 2,
    borderLeftColor: "white",
    borderBottomLeftRadius: 15,
    opacity: 0.3,
  },
  frameBottomRight: {
    width: "25%",
    height: "25%",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderRightWidth: 2,
    borderRightColor: "white",
    borderBottomRightRadius: 15,
    opacity: 0.3,
  },
});
