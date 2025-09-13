// app/learn/basics/Variables.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Variables() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>◀ Back</Text>
      </Pressable>

      {/* Page title */}
      <Text style={styles.title}>Variables</Text>

      {/* Content placeholder */}
      <View style={styles.contentBox}>
        <Text style={styles.contentText}>
          This page will contain explanations, examples, and exercises about Variables.
        </Text>
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
    marginBottom: 30,
    textAlign: "center",
  },
  contentBox: {
    width: "90%",
    padding: 25,
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    shadowColor: "#00FF7F",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  contentText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
