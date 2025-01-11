import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import { StyleSheet } from "react-native";

export default function ScannerScreen() {
  const device = useCameraDevice("back");

  const codeScanner = useCodeScanner({
    codeTypes: [],
    onCodeScanned: (codes) => {},
  });

  if (!device) {
    return null;
  }

  return (
    <Camera
      device={device}
      isActive
      style={StyleSheet.absoluteFill}
      codeScanner={codeScanner}
    />
  );
}
