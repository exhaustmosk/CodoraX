// app/login/index.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginPage() {
  const router = useRouter();
  const [userIdentifier, setUserIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!userIdentifier || !password) {
      alert("Please fill all fields");
      return;
    }
    router.replace("/main/learn"); // first tab
  };

  return (
    <View style={styles.container}>
      {/* Header image */}
      <Image
        source={require("../../assets/images/login/Header.png")}
        style={styles.headerImage}
        resizeMode="contain"
      />

      {/* Border image as background */}
      <Image
        source={require("../../assets/images/login/Border.png")}
        style={styles.borderImage}
        resizeMode="stretch"
      />

      {/* Inputs, Sign In button, and links positioned on top of border */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          placeholderTextColor="#888"
          value={userIdentifier}
          onChangeText={setUserIdentifier}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Sign In button */}
        <TouchableOpacity onPress={handleLogin} style={styles.signinButton}>
          <Image
            source={require("../../assets/images/login/signin.png")}
            style={styles.signinImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Forgot Password / Sign Up row */}
        <View style={styles.bottomRow}>
          <TouchableOpacity onPress={() => alert("Forgot password logic here")}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("./signup")}>
            <Text style={styles.signupText}>New user? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner image at bottom */}
      <Image
        source={require("../../assets/images/login/Bottom_Text.png")}
        style={styles.bannerImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b0b0b",
    paddingHorizontal: 24,
  },
  headerImage: {
    width: 250,
    height: 80,
    marginBottom: 24,
    bottom: 70,
  },
  borderImage: {
    width: "100%",
    height: 310,
    position: "absolute",
    top: 240,
    zIndex: 0,
  },
  formContainer: {
    width: "100%",
    zIndex: 1,
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: "transparent",
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1.5, // outline thickness
    borderColor: "#1EEDA2", // outline color
    borderRadius: 16, // slightly rounded corners
  },
  signinButton: {
    alignItems: "center",
    marginVertical: 12,
  },
  signinImage: {
    width: 110,
    height: 40,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  forgotText: {
    color: "#1EEDA2",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline", // underline
  },
  signupText: {
    color: "#1EEDA2",
    fontSize: 14,
    fontWeight: "600",
    maxWidth: "100%",
    textAlign: "right",
  },
  bannerImage: {
    width: 200,
    height: 50,
    top: 30,
    marginTop: 20,
  },
});
