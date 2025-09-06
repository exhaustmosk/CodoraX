// app/learn/basics/ConditionalStatements.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ConditionalStatement() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={32} color="#1EEDA2" />
      </Pressable>

      {/* Page title */}
      <Text style={styles.title}>Conditional Statements</Text>

      {/* Content placeholder */}
      <View style={styles.contentBox}>
        <Text style={styles.contentText}>
          Learn about conditional statements like if-else, switch, and ternary operators.
          This page will contain examples, explanations, and interactive exercises to
          strengthen your understanding of decision-making in programming.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
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
    padding: 30,
    backgroundColor: "#1E1E1E",
    borderRadius: 18,
    shadowColor: "#1EEDA2",
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
    lineHeight: 28,
  },
});
