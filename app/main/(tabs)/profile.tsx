// app/main/(tabs)/profile.tsx
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const [bio, setBio] = useState(
    "Passionate coder, puzzle solver, and game lover. Loves to challenge logic and algorithms daily!"
  );
  const xpAnim = useState(new Animated.Value(0))[0];
  const dpAnim = useState(new Animated.Value(0))[0];
  const [dp, setDp] = useState(require("../../../assets/images/Profile/dp1.png"));
  const [modalVisible, setModalVisible] = useState(false);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    level: 7,
    xp: 4200,
    streak: 14,
    badges: ["Speed Coder", "Bug Squasher", "Logic Master"],
    completedGames: 25,
    completedChallenges: 48,
  };

  useEffect(() => {
    Animated.timing(xpAnim, {
      toValue: (user.xp % 1000) / 1000,
      duration: 1200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(dpAnim, { toValue: 1, duration: 1500, useNativeDriver: true }),
        Animated.timing(dpAnim, { toValue: 0, duration: 1500, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const xpWidth = xpAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const dpScale = dpAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.05],
  });

  const dpOptions = [
    require("../../../assets/images/Profile/dp1.png"),
    require("../../../assets/images/Profile/dp2.png"),
    require("../../../assets/images/Profile/dp3.png"),
    require("../../../assets/images/Profile/dp4.png"),
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* DP & User Info */}
      <View style={styles.userHeader}>
        <View>
          <Animated.Image source={dp} style={[styles.dp, { transform: [{ scale: dpScale }] }]} />
          {/* Pen Icon */}
          <TouchableOpacity style={styles.editIcon} onPress={() => setModalVisible(true)}>
            <Ionicons name="pencil" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <TextInput
            style={styles.userBioInput}
            value={bio}
            onChangeText={setBio}
            multiline
            placeholder="Write something about yourself..."
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Modal for DP selection */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Profile Picture</Text>
            <View style={styles.dpOptionsRow}>
              {dpOptions.map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    setDp(option);
                    setModalVisible(false);
                  }}
                >
                  <Image source={option} style={styles.dpOption} />
                </Pressable>
              ))}
            </View>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Level & XP */}
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>Level {user.level}</Text>
        <View style={styles.xpBarBackground}>
          <Animated.View style={[styles.xpBarFill, { width: xpWidth }]} />
        </View>
        <Text style={styles.xpText}>{user.xp} XP</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{user.completedGames}</Text>
          <Text style={styles.statLabel}>Games Completed</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{user.completedChallenges}</Text>
          <Text style={styles.statLabel}>Challenges Completed</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{user.streak}</Text>
          <Text style={styles.statLabel}>Streak (days)</Text>
        </View>
      </View>

      {/* Badges */}
      <Text style={styles.sectionHeader}>Badges & Achievements</Text>
      <View style={styles.badgeContainer}>
        {user.badges.map((badge, idx) => (
          <Animated.View
            key={idx}
            style={[
              styles.badgeBox,
              {
                opacity: dpAnim.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] }),
                transform: [{ scale: dpAnim.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) }],
              },
            ]}
          >
            <Text style={styles.badgeText}>{badge}</Text>
          </Animated.View>
        ))}
      </View>

      {/* Fun gamified info */}
      <View style={styles.gamifySection}>
        <Text style={styles.gamifyText}>🎮 Keep going! Your next level is just around the corner.</Text>
        <Text style={styles.gamifyText}>🔥 Current streak: {user.streak} days of coding!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b0b0b" },
  content: { padding: 20, paddingBottom: 40, paddingTop: 50 },
  userHeader: { flexDirection: "row", marginBottom: 30, alignItems: "center" },
  dp: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "#1EEDA2", marginRight: 20 },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 15,
    backgroundColor: "#1EEDA2",
    borderRadius: 14,
    padding: 4,
  },
  userInfo: { flex: 1 },
  userName: { fontSize: 26, fontWeight: "700", color: "#1EEDA2" },
  userEmail: { fontSize: 16, color: "#fff", marginVertical: 4 },
  userBioInput: {
    fontSize: 14,
    color: "#fff",
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#1EEDA2",
    borderRadius: 10,
    padding: 8,
    minHeight: 60,
  },
  levelContainer: { marginBottom: 30, alignItems: "center" },
  levelText: { color: "#1EEDA2", fontSize: 20, fontWeight: "700", marginBottom: 6 },
  xpBarBackground: { width: "100%", height: 16, backgroundColor: "#111", borderRadius: 8, overflow: "hidden", marginBottom: 6 },
  xpBarFill: { height: "100%", backgroundColor: "#1EEDA2" },
  xpText: { color: "#fff", fontSize: 14 },
  statsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 30 },
  statBox: {
    backgroundColor: "#111",
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: { fontSize: 22, fontWeight: "700", color: "#1EEDA2" },
  statLabel: { fontSize: 14, color: "#fff", marginTop: 4, textAlign: "center" },
  sectionHeader: { fontSize: 22, fontWeight: "700", color: "#1EEDA2", marginBottom: 14 },
  badgeContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 30 },
  badgeBox: {
    backgroundColor: "#111",
    borderWidth: 2,
    borderColor: "#1EEDA2",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    margin: 5,
  },
  badgeText: { color: "#1EEDA2", fontWeight: "600" },
  gamifySection: { padding: 20, backgroundColor: "#111", borderRadius: 14 },
  gamifyText: { color: "#fff", fontSize: 16, marginBottom: 8 },

  // Modal Styles
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)" },
  modalContent: { backgroundColor: "#0b0b0b", padding: 20, borderRadius: 12, alignItems: "center", width: "80%" },
  modalTitle: { color: "#1EEDA2", fontSize: 20, fontWeight: "700", marginBottom: 20 },
  dpOptionsRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  dpOption: { width: 70, height: 70, borderRadius: 35, margin: 10, borderWidth: 2, borderColor: "#1EEDA2" },
  closeButton: { marginTop: 20, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#1EEDA2", borderRadius: 8 },
  closeButtonText: { color: "#000", fontWeight: "700" },
});
