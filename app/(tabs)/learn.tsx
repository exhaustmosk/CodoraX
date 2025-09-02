// app/(tabs)/learn.tsx
import { useRouter } from "expo-router";
import React from "react";
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export default function LearnScreen() {
  const router = useRouter();

  // Separate Animated.Value for each button
  const scaleBasics = React.useRef(new Animated.Value(1)).current;
  const scaleHTML = React.useRef(new Animated.Value(1)).current;
  const scalePython = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = (scale: Animated.Value) => {
    Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();
  };

  const handlePressOut = (scale: Animated.Value) => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  // Corrected navigation paths for Expo Router
  const handleNavigate = (screenName: string) => {
    // Use relative nested path
    router.push(`./learn/${screenName}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Image
        source={require("../../assets/images/Banner.png")}
        style={styles.banner}
        resizeMode="contain"
      />

      <Image
        source={require("../../assets/images/BannerText.png")}
        style={styles.bannerText}
        resizeMode="contain"
      />

      <View style={styles.grid}>
        <Pressable
          onPressIn={() => handlePressIn(scaleBasics)}
          onPressOut={() => handlePressOut(scaleBasics)}
          onPress={() => handleNavigate("BasicsOfProgramming")}
        >
          <Animated.Image
            source={require("../../assets/images/BasicsOfProgramming.png")}
            style={[styles.optionImage, { transform: [{ scale: scaleBasics }] }]}
            resizeMode="contain"
          />
        </Pressable>

        <Pressable
          onPressIn={() => handlePressIn(scaleHTML)}
          onPressOut={() => handlePressOut(scaleHTML)}
          onPress={() => handleNavigate("HTML")}
        >
          <Animated.Image
            source={require("../../assets/images/HTML.png")}
            style={[styles.optionImage, { transform: [{ scale: scaleHTML }] }]}
            resizeMode="contain"
          />
        </Pressable>

        <Pressable
          onPressIn={() => handlePressIn(scalePython)}
          onPressOut={() => handlePressOut(scalePython)}
          onPress={() => handleNavigate("Python")}
        >
          <Animated.Image
            source={require("../../assets/images/Python.png")}
            style={[styles.optionImage, { transform: [{ scale: scalePython }] }]}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 120,
    alignSelf: "flex-start",
    marginBottom: -30,
  },
  banner: {
    width: 400,
    height: 200,
    marginBottom: 0,
  },
  bannerText: {
    width: 320,
    height: 120,
    marginBottom: 20,
  },
  grid: {
    width: "100%",
    alignItems: "center",
  },
  optionImage: {
    width: 500,
    height: 100,
    marginVertical: 0,
  },
});
