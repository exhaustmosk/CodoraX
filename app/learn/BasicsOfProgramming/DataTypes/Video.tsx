// app/learn/BasicsOfProgramming/DataTypes/Video.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Video = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with Back Button */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#1EEDA2" />
          </Pressable>
          <Text style={styles.headerTitle}>Watch Video</Text>
        </View>

        {/* Video Player Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Understanding Data Types</Text>
          <View style={styles.videoPlaceholder}>
            <Text style={styles.videoText}>Video Player Placeholder</Text>
          </View>
          <Text style={styles.cardDescription}>
            Play the video to master the basics before you begin your game quest.
          </Text>
        </View>

        {/* Call to Action Card */}
        <View style={styles.card}>
          <Text style={styles.ctaTitle}>Ready for a challenge?</Text>
          <Text style={styles.ctaText}>
            You've got the knowledge, now let's put it to the test!
          </Text>
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Start Game</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Video;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    padding: 20,
    paddingBottom: 80,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
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
    backgroundColor: "rgba(28,28,30,0.5)",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#1EEDA2",
    padding: 16,
    marginBottom: 20,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: "#1EEDA2",
    textAlign: "center",
  },
  videoPlaceholder: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#111",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  videoText: {
    color: "#777",
    fontSize: 16,
  },
  cardDescription: {
    color: "#bbb",
    textAlign: "center",
    fontSize: 14,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1EEDA2",
    textAlign: "center",
  },
  ctaText: {
    fontSize: 16,
    marginBottom: 12,
    color: "#ccc",
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#1EEDA2",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 999,
  },
  ctaButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
