import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
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
  const [unlocked, setUnlocked] = useState(false); // toggle lock/play

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const topics = [
    "Introuction To Programming",
    "Input and Output (I/O)",
    "Variables",
    "Data Types",
    "Operators",
    "Conditional Statements",
    "Loops",
    "Strings",
    "Arrays / Lists",
    "Functions",
  ];

  // Progress: only first topic unlocked initially
  const progressCount = unlocked ? topics.length : 1;
  const progressPercent = Math.round((progressCount / topics.length) * 100);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          animation: "fade",
          contentStyle: { backgroundColor: "#000" },
        }}
      />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Back button */}
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={32} color="#1EEDA2" />
          </Pressable>

          {/* Title */}
          <Text style={styles.title}>Basics of Programming</Text>

          {/* Progress Bar + Text */}
          <View style={styles.progressRow}>
            <View style={styles.progressContainer}>
              <View
                style={[styles.progressBar, { width: `${progressPercent}%` }]}
              />
            </View>
            <Text style={styles.progressText}>{progressPercent}% completed</Text>
          </View>

          {/* Unlock All / Lock All Button */}
          <Pressable
            style={styles.unlockButton}
            onPress={() => setUnlocked((prev) => !prev)}
          >
            <Text style={styles.unlockButtonText}>
              {unlocked ? "Lock All" : "Unlock All"}
            </Text>
          </Pressable>

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
            {topics.map((item, index) => {
              const isUnlocked = unlocked || index === 0;
              return (
                <View key={index}>
                  <View style={styles.topicItem}>
                    <Text style={styles.topicText}>{item}</Text>

                    {isUnlocked ? (
                      <Pressable
                        onPress={() =>
                          item === "Data Types"
                            ? router.push("/learn/BasicsOfProgramming/DataTypes")
                            : router.push("/components/UnderDevelopment")
                        }
                      >
                        <Image
                          source={require("../../assets/images/BasicsOfProgramming/Play.png")}
                          style={styles.topicIcon}
                          resizeMode="contain"
                        />
                      </Pressable>
                    ) : (
                      <Image
                        source={require("../../assets/images/BasicsOfProgramming/Lock.png")}
                        style={styles.topicIcon}
                        resizeMode="contain"
                      />
                    )}
                  </View>

                  {/* Divider */}
                  {index !== topics.length - 1 && <View style={styles.divider} />}
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.bottomSpacer} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  backButton: { position: "absolute", top: 40, left: 20, zIndex: 10 },
  title: { fontSize: 34, fontWeight: "bold", color: "#fff", marginTop: 60, textAlign: "center" },
  progressRow: { flexDirection: "row", alignItems: "center", marginTop: 20, marginBottom: 0 },
  progressContainer: { width: 150, height: 8, backgroundColor: "rgba(30, 237, 162, 0.2)", borderRadius: 4, marginRight: 10 },
  progressBar: { height: "100%", backgroundColor: "#1EEDA2", borderRadius: 4 },
  progressText: { color: "#1EEDA2", fontSize: 14 },
  unlockButton: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginBottom: -50,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderColor: "#1EEDA2",
    backgroundColor: "transparent",
    borderWidth: 1,
    zIndex: 20,
  },
  unlockButtonText: { color: "#1EEDA2", fontWeight: "700" },
  boxContainer: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  boxImage: { width: "100%", height: 320, marginBottom: -60 },
  startButtonWrapper: { position: "absolute", top: "70%", alignSelf: "center", zIndex: 11 },
  startImage: { width: 160, height: 60 },
  topicBox: { width: 365, height: 635, borderWidth: 2, borderColor: "#1EEDA2", borderRadius: 15, backgroundColor: "transparent", padding: 20 },
  topicItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15 },
  topicText: { color: "#fff", fontSize: 16, fontWeight: "500", bottom: 10 },
  topicIcon: { width: 20, height: 20 },
  divider: { height: 1, width: "100%", backgroundColor: "#18201D", marginTop: 8 },
  bottomSpacer: { height: 0, backgroundColor: "#000" },
});
