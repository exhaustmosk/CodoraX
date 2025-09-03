// app/(tabs)/game.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GameTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Game</Text>
      <Text style={styles.subtitle}>
        This is the Game tab placeholder. Your game content will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1EEDA2",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
