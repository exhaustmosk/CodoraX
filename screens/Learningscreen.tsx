import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      {/* Logo at top-left */}
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      {/* Page title or content */}
      <Text style={styles.title}>Welcome to Learn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    alignSelf: "flex-start",
    marginTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
});