// app/learn/basics/Variables.tsx
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function Variables() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/UnderDevelopment/Development.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Image
          source={require("../../../assets/images/UnderDevelopment/back.png")}
          style={styles.backImage}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 600,
  },
  backButton: {
    marginTop: 20,
  },
  backImage: {
    width: 50,
    height: 50,
  },
});
