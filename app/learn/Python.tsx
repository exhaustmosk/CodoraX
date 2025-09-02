import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Python() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      <Text style={styles.title}>Python</Text>

      <Text style={styles.content}>
        Python is a versatile programming language. Learn variables, data types, functions, loops, and simple projects.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#1EEDA2", marginBottom: 20, textAlign: "center" },
  content: { fontSize: 18, color: "#fff", marginBottom: 15, textAlign: "center" },
});
