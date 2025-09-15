// app/learn/BasicsOfProgramming/DataTypes.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DataTypes = () => {
  const router = useRouter();

  const preGameOptions = [
    { title: "Watch Videos", icon: "play-circle-outline" as const },
    { title: "Read Docs", icon: "book-outline" as const },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#1EEDA2" />
          </Pressable>
          <Text style={styles.headerTitle}>Data Types</Text>
        </View>

        {/* Game Preview Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Game Preview</Text>
          <View style={styles.previewBox}>
            <Text style={styles.previewText}>
              Game animation or video preview goes here.
            </Text>
          </View>
          <Pressable
            style={styles.playButton}
            onPress={() => console.log("Play Game clicked")}
          >
            <Text style={styles.playButtonText}>Play Game</Text>
          </Pressable>
        </View>

        {/* Pre-Game Learning Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitleGreen}>Not prepared?</Text>
          <Text style={styles.description}>
            If you are not yet prepared for this game or topic, you can review
            the concepts first. Select an option below to learn more and level
            up your skills!
          </Text>

          {preGameOptions.map((item, idx) => {
            const scaleAnim = useRef(new Animated.Value(1)).current;

            const handlePressIn = () => {
              Animated.spring(scaleAnim, {
                toValue: 0.95,
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

            return (
              <Animated.View
                key={idx}
                style={{ transform: [{ scale: scaleAnim }] }}
              >
                <Pressable
                  style={styles.optionButton}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  onPress={() => {
                    if (item.title === "Read Docs") {
                      router.push(
                        "/learn/BasicsOfProgramming/DataTypes/Docs"
                      );
                    } else if (item.title === "Watch Videos") {
                      router.push(
                        "/learn/BasicsOfProgramming/DataTypes/Video"
                      );
                    }
                  }}
                >
                  <Text style={styles.optionText}>{item.title}</Text>
                  <Ionicons name={item.icon} size={24} color="#1EEDA2" />
                </Pressable>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataTypes;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#444",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1EEDA2",
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#1EEDA2",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#fff",
  },
  cardTitleGreen: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1EEDA2",
  },
  previewBox: {
    aspectRatio: 16 / 9,
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },
  previewText: {
    color: "#777",
    textAlign: "center",
    padding: 8,
  },
  playButton: {
    marginTop: 16,
    backgroundColor: "#1EEDA2",
    paddingVertical: 12,
    borderRadius: 999,
  },
  playButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  description: {
    color: "#bbb",
    marginBottom: 12,
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#1EEDA2",
  },
  optionText: {
    color: "#fff",
    fontWeight: "600",
  },
});
