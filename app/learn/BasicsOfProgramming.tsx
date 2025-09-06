import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function BasicsOfProgramming() {
  const router = useRouter();

  // Animated scales for all 10 topics
  const scales = Array.from({ length: 10 }, () => React.useRef(new Animated.Value(1)).current);

  const handlePressIn = (scale: Animated.Value) => {
    Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();
  };
  const handlePressOut = (scale: Animated.Value) => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  // Subtopics with correct routes
  const subtopics = [
    { name: "1. Introduction to Programming", scale: scales[0], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "2. Datatypes", scale: scales[1], route: "/learn/basics/datatypes" as const, color: "#1EEDA2" },
    { name: "3. Variables", scale: scales[2], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "4. Operators", scale: scales[3], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "5. Conditional Statements", scale: scales[4], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "6. Loops", scale: scales[5], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "7. Functions / Methods", scale: scales[6], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "8. Arrays / Lists", scale: scales[7], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "9. Input and Output", scale: scales[8], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
    { name: "10. Basic Error Handling (Optional)", scale: scales[9], route: "/learn/basics/UnderDevelopment" as const, color: "#1EEDA2" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back button */}
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={32} color="#1EEDA2" />
      </Pressable>

      <Text style={styles.title}>Basics of Programming</Text>

      <View style={styles.grid}>
        {subtopics.map((topic, index) => (
          <Pressable
            key={index}
            onPressIn={() => handlePressIn(topic.scale)}
            onPressOut={() => handlePressOut(topic.scale)}
            onPress={() => router.push(topic.route)}
          >
            <Animated.View
              style={[
                styles.card,
                { transform: [{ scale: topic.scale }], backgroundColor: topic.color },
              ]}
            >
              <Text style={styles.cardText}>{topic.name}</Text>
            </Animated.View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1EEDA2",
    marginTop: 60,
    marginBottom: 40,
    textAlign: "center",
  },
  grid: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    width: 380,
    height: 140,
    borderRadius: 18,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1EEDA2",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 15,
  },
  cardText: {
    color: "#000",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
});
