import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function BasicsOfProgramming() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      <Text style={styles.title}>Basics of Programming</Text>

      <Text style={styles.content}>
        Learn the fundamentals of programming: variables, data types, loops, conditionals, and functions.
      </Text>

      <Text style={styles.content}>
        This screen can also contain small quizzes or links to mini-games later!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1EEDA2",
    marginBottom: 20,
    textAlign: "center",
  },
  content: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
});
