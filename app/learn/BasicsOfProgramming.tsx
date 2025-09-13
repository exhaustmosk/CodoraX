import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BasicsOfProgramming() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [inverted, setInverted] = useState(false);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
    setInverted(true);
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
    setInverted(false);
  };

  const topics = [
    "Basics Of Programming",
    "Data Types",
    "Variables",
    "Operators",
    "Conditional Statements",
    "Loops",
    "Functions",
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back button */}
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={32} color="#1EEDA2" />
        </Pressable>

        {/* Title */}
        <Text style={styles.title}>Basics of Programming</Text>

        {/* Progress Bar BELOW the title */}
        <View style={styles.progressContainer}>
          <View
            style={[styles.progressBar, { width: `${(1 / topics.length) * 100}%` }]}
          />
        </View>

        {/* Box with Start button overlay */}
        <View style={styles.boxContainer}>
          <Image
            source={require("../../assets/images/BasicsOfProgramming/Box1.png")}
            style={styles.boxImage}
            resizeMode="contain"
          />

          <Pressable
            style={styles.startButtonWrapper}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => console.log("Start Pressed")}
          >
            <Animated.Image
              source={require("../../assets/images/BasicsOfProgramming/Start.png")}
              style={[styles.startImage, { transform: [{ scale: scaleAnim }] }]}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        {/* Transparent green-outlined big box */}
        <View style={styles.topicBox}>
          {topics.map((item, index) => (
            <View key={index}>
              <View style={styles.topicItem}>
                <Text style={styles.topicText}>{item}</Text>
                <Image
                  source={
                    index === 0
                      ? require("../../assets/images/BasicsOfProgramming/Play.png")
                      : require("../../assets/images/BasicsOfProgramming/Lock.png")
                  }
                  style={styles.topicIcon}
                  resizeMode="contain"
                />
              </View>
              {/* Divider (not for last item) */}
              {index !== topics.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Black bottom spacer so content never collides with phone UI */}
      <View style={styles.bottomSpacer} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000", // ensures bottom is black
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 60,
    textAlign: "center",
  },
  boxContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  boxImage: {
    width: "100%",
    height: 320,
    marginBottom: -60,
  },
  startButtonWrapper: {
    position: "absolute",
    top: "70%",
    alignSelf: "center",
    zIndex: 11,
  },
  startImage: {
    width: 160,
    height: 60,
  },
  topicBox: {
    width: 365,
    height: 470,
    borderWidth: 2,
    borderColor: "#1EEDA2",
    borderRadius: 15,
    backgroundColor: "transparent",
    padding: 20,
    marginBottom: 20,
  },
  progressContainer: {
    width: "50%",
    height: 8,
    backgroundColor: "rgba(30, 237, 162, 0.2)",
    borderRadius: 4,
    marginTop: 20,
    alignSelf: "center",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1EEDA2",
    borderRadius: 4,
  },
  topicItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  topicText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    bottom: 10,
  },
  topicIcon: {
    width: 20, // smaller than before
    height: 20,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#18201D",
    marginTop: 8,
  },
  bottomSpacer: {
    height: 0, // adjustable based on your phone UI
    backgroundColor: "#000",
  },
});
