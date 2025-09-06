import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function UnderDevelopment() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/UnderDevelopment/Development.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Back Button PNG */}
      <Pressable onPress={() => router.back()}>
        <Image
          source={require("../../assets/images/UnderDevelopment/back.png")}
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
    marginBottom: 30,
  },
  backImage: {
    width: 150,
    height: 60,
  },
});
