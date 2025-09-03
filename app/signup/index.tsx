import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    // TODO: Implement actual signup logic

    // Navigate to first tab after signup
    router.replace("/main/learn");
  };

  const handleGoogleSignup = () => Alert.alert("Google Signup", "Clicked Google signup");
  const handleMetaSignup = () => Alert.alert("Meta Signup", "Clicked Meta signup");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#DB4437" }]} onPress={handleGoogleSignup}>
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#4267B2" }]} onPress={handleMetaSignup}>
          <Text style={styles.socialText}>Sign up with Meta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.loginPrompt}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("./login")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#0b0b0b" },
  title: { fontSize: 30, fontWeight: "700", marginBottom: 24, color: "#1EEDA2", textAlign: "center" },
  input: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#111",
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1EEDA2",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#1EEDA2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: { color: "#0b0b0b", fontWeight: "700", fontSize: 18 },
  orText: { color: "#888", textAlign: "center", marginVertical: 8, fontWeight: "600" },
  socialContainer: { marginVertical: 8 },
  socialBtn: { padding: 14, borderRadius: 12, marginBottom: 12, alignItems: "center" },
  socialText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  bottomRow: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 12 },
  loginPrompt: { color: "#888", fontSize: 16 },
  loginText: { color: "#1EEDA2", fontWeight: "700", fontSize: 16 },
});
