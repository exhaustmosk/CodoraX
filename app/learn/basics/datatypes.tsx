// app/learn/basics/Datatypes.tsx
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Datatypes() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>◀ Back</Text>
      </Pressable>

      {/* Page title */}
      <Text style={styles.title}>Datatypes</Text>

      {/* Game preview */}
      <View style={styles.gamePreview}>
        <Text style={styles.gamePreviewText}>Game Preview Area</Text>
      </View>

      {/* Play Game button */}
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => {
          // Replace with your actual game screen route
          router.push("/game-intro");
        }}
      >
        <Text style={styles.playButtonText}>▶ Play Game</Text>
      </TouchableOpacity>

      {/* Learn More section */}
      <View style={styles.learnMoreBox}>
        <Text style={styles.learnMoreText}>
          Not ready for the game? Explore videos, tutorials, and examples to understand Datatypes first.
        </Text>
        <TouchableOpacity
          style={styles.learnMoreButton}
          onPress={() => {
            // Replace with tutorial route or external links
            router.push("/learn/basics/UnderDevelopment");
          }}
        >
          <Text style={styles.learnMoreButtonText}>📚 Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  backText: {
    color: "#1EEDA2",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1EEDA2",
    marginTop: 60,
    marginBottom: 25,
    textAlign: "center",
  },
  gamePreview: {
    width: "90%",
    height: 180,
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#1EEDA2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  gamePreviewText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  playButton: {
    backgroundColor: "#1EEDA2",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginBottom: 30,
  },
  playButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  learnMoreBox: {
    width: "90%",
    padding: 20,
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  learnMoreText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  learnMoreButton: {
    backgroundColor: "#00FF7F",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 14,
  },
  learnMoreButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
