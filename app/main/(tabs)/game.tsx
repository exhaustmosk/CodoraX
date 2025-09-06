// app/main/(tabs)/game.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function GameScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Example games data with more details
  const games = [
    { name: "Maze Runner", difficulty: "Easy", description: "Navigate through mazes using programming logic.", duration: "5-10 mins" },
    { name: "Space Explorer", difficulty: "Medium", description: "Explore planets by solving coding challenges.", duration: "10-20 mins" },
    { name: "Code Quest", difficulty: "Hard", description: "Complete quests by writing efficient code.", duration: "20-30 mins" },
    { name: "Logic Puzzle", difficulty: "Medium", description: "Solve logic puzzles to progress.", duration: "10-15 mins" },
    { name: "Jump Hero", difficulty: "Easy", description: "Control the hero by programming jump sequences.", duration: "5-10 mins" },
    { name: "Galaxy Defender", difficulty: "Hard", description: "Defend your galaxy with algorithmic strategies.", duration: "20-30 mins" },
  ];

  // Filter games based on search
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleGamePress = () => {
    // Navigate to the UnderDevelopment page inside app/components/
    router.push("/components/UnderDevelopment");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Community Games</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Explore more from the community"
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />

      {/* Game Blocks */}
      {filteredGames.map((game, index) => (
        <TouchableOpacity key={index} style={styles.gameBox} onPress={handleGamePress}>
          <Text style={styles.gameName}>{game.name}</Text>
          <Text style={styles.gameDetails}>Difficulty: {game.difficulty}</Text>
          <Text style={styles.gameDetails}>{game.description}</Text>
          <Text style={styles.gameDetails}>Estimated Time: {game.duration}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1EEDA2",
    textAlign: "center",
    marginBottom: 20,
    marginTop:30,
  },
  searchBar: {
    width: "100%",
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  gameBox: {
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#1EEDA2",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 16,
  },
  gameName: {
    color: "#1EEDA2",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  gameDetails: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 4,
  },
});
