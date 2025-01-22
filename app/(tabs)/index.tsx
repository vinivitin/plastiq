import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from "react-native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { HapticTab } from "@/components/HapticTab";
import { Image } from "expo-image";
import { darkTheme, lightTheme } from "@/constants/Colors";
import React, { useMemo } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Octicons from "@expo/vector-icons/Octicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Recommendation = Record<"header" | "body", string>;

type ScannedProduct = Record<"image" | "name" | "brand" | "score", string>;

type AbstractBackground = Record<number, string>;

type ColorBackground = LinearGradientProps["colors"][];

export default function HomeScreen(): JSX.Element {
  const colorScheme = useColorScheme();
  const tabBarHeight = useBottomTabBarHeight();
  const { top } = useSafeAreaInsets();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  const recommendationsMock: Recommendation[] = [
    {
      header: "Sugar",
      body: "High sugar content detected. Reduce intake to avoid health risks.",
    },
    {
      header: "Fiber",
      body: "Low fiber detected. Increase whole grains, fruits, and vegetables.",
    },
    {
      header: "Additives",
      body: "Contains artificial additives. Choose natural alternatives for better health.",
    },
    {
      header: "Sodium",
      body: "Excess sodium found. Opt for low-sodium options to support heart health.",
    },
    {
      header: "Calories",
      body: "High caloric value. Watch portion sizes to maintain a healthy weight.",
    },
    {
      header: "Protein",
      body: "Low protein levels. Add lean meats, beans, and dairy for muscle health.",
    },
  ];
  const lastScannedMock: ScannedProduct[] = [
    {
      image:
        "https://images.openfoodfacts.org/images/products/762/221/044/9283/front_es.590.200.jpg",
      name: "Galletas de Chocolate Príncipe",
      brand: "Lu",
      score: "61/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/301/762/042/5035/front_es.507.200.jpg",
      name: "Nutella",
      brand: "Ferrero",
      score: "78/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/544/900/021/4911/front_es.213.200.jpg",
      name: "Coca-Cola",
      brand: "Coca-Cola",
      score: "100/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_es.621.200.jpg",
      name: "Nutella",
      brand: "Ferrero",
      score: "65/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/544/900/021/4799/front_en.252.200.jpg",
      name: "Coca-Cola Zero",
      brand: "Coca-Cola",
      score: "82/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/000/002/072/4696/front_es.303.200.jpg",
      name: "Almendras natural",
      brand: "Alesto",
      score: "64/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/730/040/048/1588/front_fr.280.200.jpg",
      name: "Tostadas crujientes de fibra",
      brand: "Wasa",
      score: "92/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/541/118/811/2709/front_es.547.200.jpg",
      name: "Sin Azúcar Almendras",
      brand: "Alpro",
      score: "63/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/000/002/000/5733/front_es.174.200.jpg",
      name: "Nueces sin cáscara",
      brand: "Alesto",
      score: "87/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/322/982/001/9307/front_fr.281.200.jpg",
      name: "Flocons d'avoine",
      brand: "Bjorg",
      score: "80/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/304/692/002/8004/front_es.227.200.jpg",
      name: "Excellence 70% Cocoa Intense Dark",
      brand: "Lindt",
      score: "80/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/303/371/006/5967/front_es.328.200.jpg",
      name: "Nesquik",
      brand: "Nestlé",
      score: "89/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/405/648/921/6162/front_es.185.200.jpg",
      name: "High Protein Chocolate Pudding",
      brand: "Milbona",
      score: "51/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/541/004/100/1204/front_es.411.200.jpg",
      name: "Original Crackers",
      brand: "Tuc",
      score: "88/100",
    },
    {
      image:
        "https://images.openfoodfacts.org/images/products/400/871/375/6661/front_es.65.200.jpg",
      name: "Copos de avena",
      brand: "Brüggen",
      score: "53/100",
    },
  ];

  const abstractBackground: AbstractBackground = [
    require("@/assets/images/shapes/1.svg"),
    require("@/assets/images/shapes/2.svg"),
    require("@/assets/images/shapes/3.svg"),
    require("@/assets/images/shapes/4.svg"),
    require("@/assets/images/shapes/5.svg"),
    require("@/assets/images/shapes/6.svg"),
  ];

  const gradientsBackground: ColorBackground = [
    [
      "rgba(225, 195, 250, 0.1)",
      "rgba(220, 185, 245, 0.2)",
      "rgba(215, 175, 240, 0.3)",
      "rgba(210, 165, 235, 0.4)",
    ],
    [
      "rgba(255, 223, 186, 0.1)",
      "rgba(255, 210, 170, 0.2)",
      "rgba(255, 198, 155, 0.3)",
      "rgba(255, 185, 140, 0.4)",
    ],
    [
      "rgba(186, 245, 255, 0.1)",
      "rgba(165, 235, 245, 0.2)",
      "rgba(145, 225, 235, 0.3)",
      "rgba(125, 215, 225, 0.4)",
    ],
    [
      "rgba(255, 192, 203, 0.1)",
      "rgba(250, 182, 195, 0.2)",
      "rgba(245, 172, 187, 0.3)",
      "rgba(240, 162, 179, 0.4)",
    ],
    [
      "rgba(240, 230, 140, 0.1)",
      "rgba(230, 220, 130, 0.2)",
      "rgba(220, 210, 120, 0.3)",
      "rgba(210, 200, 110, 0.4)",
    ],
    [
      "rgba(173, 216, 230, 0.1)",
      "rgba(160, 206, 220, 0.2)",
      "rgba(145, 196, 210, 0.3)",
      "rgba(130, 186, 200, 0.4)",
    ],
  ];

  const greetingMessage = useMemo((): string => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good afternoon";
    } else if (currentHour >= 18 && currentHour < 23) {
      return "Good evening";
    } else {
      return "Good night";
    }
  }, []);

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
          <View style={[styles.header, { marginTop: top + 20 }]}>
            <Image
              style={styles.image}
              source={require("@/assets/images/logo.svg")}
              contentFit="contain"
            />
            <Text style={[styles.headerText, { color: theme.accent }]}>
              {greetingMessage}
            </Text>
          </View>
          <View style={styles.content}>
            <HapticTab style={styles.groupTitleControl}>
              <Text style={[styles.groupTitleText, { color: theme.accent }]}>
                Top Recommendations
              </Text>
              <Octicons name="arrow-right" size={21} color={theme.accent} />
            </HapticTab>
            <FlatList
              data={recommendationsMock}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              contentContainerStyle={{ gap: 10 }}
              columnWrapperStyle={styles.recommendationRow}
              renderItem={({ item, index }) => (
                <LinearGradient
                  style={[
                    styles.recommendationItem,
                    { borderColor: theme.cardBorder },
                  ]}
                  colors={gradientsBackground[index]}
                >
                  <Image
                    style={styles.noiseBackground}
                    source={require("@/assets/images/textures/noise.png")}
                    contentFit="cover"
                  />
                  <Image
                    style={styles.shapeBackground}
                    source={abstractBackground[index]}
                    tintColor={gradientsBackground[index][3]}
                    contentFit="contain"
                  />
                  <View style={styles.recommendationItemContainer}>
                    <Text
                      style={[
                        styles.recommendationItemHeader,
                        { color: theme.accent },
                      ]}
                    >
                      {item.header}
                    </Text>
                    <Text
                      style={[
                        styles.recommendationItemBody,
                        { color: theme.accent },
                      ]}
                    >
                      {item.body}
                    </Text>
                  </View>
                </LinearGradient>
              )}
            />
            <HapticTab style={styles.groupTitleControl}>
              <Text style={[styles.groupTitleText, { color: theme.accent }]}>
                Last Scanned
              </Text>
              <Octicons name="arrow-right" size={21} color={theme.accent} />
              {/*<Ionicons name="arrow-forward" size={21} color={theme.accent} />*/}
            </HapticTab>
            <View style={styles.lastScannedList}>
              {lastScannedMock.map((product, index) => (
                <LinearGradient
                  key={index}
                  style={[
                    styles.scannedItem,
                    { borderColor: theme.cardBorder },
                  ]}
                  colors={[
                    "rgba(35,35,35,1)",
                    "rgba(35,35,35,1)",
                    "rgba(35,35,35,1)",
                    "rgba(35,35,35,1)",
                  ]}
                >
                  <Image
                    source={{ uri: product.image }}
                    style={styles.scannedImage}
                    contentFit="cover"
                  />
                  <View style={styles.scannedInfo}>
                    <Text style={[styles.scannedName, { color: theme.accent }]}>
                      {product.name}
                    </Text>
                    <Text
                      style={[styles.scannedBrand, { color: theme.accent }]}
                    >
                      {product.brand}
                    </Text>
                    <Text
                      style={[styles.scannedScore, { color: theme.accent }]}
                    >
                      Score: {product.score}
                    </Text>
                  </View>
                </LinearGradient>
              ))}
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
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 15,
  },
  headerText: {
    fontSize: 40,
    fontFamily: "EBGaramond-Bold",
  },
  content: {
    marginTop: 30,
    marginHorizontal: 20,
    gap: 25,
  },
  groupTitleControl: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  groupTitleText: {
    fontSize: 24,
    fontWeight: "600",
  },
  image: {
    height: 60,
    width: 60,
  },
  recommendationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  recommendationItem: {
    flex: 1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    position: "relative",
    height: 250,
  },
  recommendationItemContainer: {
    padding: 20,
  },
  recommendationItemHeader: {
    fontSize: 25,
    fontFamily: "EBGaramond-Bold",
    marginBottom: 10,
  },
  recommendationItemBody: {
    fontSize: 16,
  },
  recommendationItemIcon: {
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  lastScannedList: {
    gap: 15,
  },
  scannedItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
  },
  scannedImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 20,
  },
  scannedInfo: {
    flex: 1,
  },
  scannedName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scannedBrand: {
    fontSize: 16,
  },
  scannedScore: {
    fontSize: 16,
    fontWeight: "600",
  },
  overlayTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 10,
    pointerEvents: "none",
  },
  overlayBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    zIndex: 10,
    pointerEvents: "none",
  },
  shapeBackground: {
    width: 130,
    height: 130,
    position: "absolute",
    opacity: 0.4,
    bottom: -40,
    right: -40,
  },
  noiseBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
