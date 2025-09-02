import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HTML() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      <Text style={styles.title}>HTML</Text>

      <Text style={styles.content}>
        HTML is the structure of a webpage. Learn tags, elements, headings, paragraphs, links, images, and forms.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#1EEDA2", marginBottom: 20, textAlign: "center" },
  content: { fontSize: 18, color: "#fff", marginBottom: 15, textAlign: "center" },
});
