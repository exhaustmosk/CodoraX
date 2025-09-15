// app/learn/BasicsOfProgramming/DataTypes/Docs.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Docs = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with Back Button */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#1EEDA2" />
          </Pressable>
          <Text style={styles.headerTitle}>Data Types</Text>
        </View>

        {/* Quick Summary Box */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Summary</Text>
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Integers (int)</Text>: Whole numbers. Example: 10, -3, 42
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Floats (float)</Text>: Numbers with decimals. Example: 3.14, -0.5
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Strings (str)</Text>: Text data. Example: "Hello", "Python"
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Booleans (bool)</Text>: True or False values. Example: True, False
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Lists (list)</Text>: Ordered items. Example: [1, 2, 3], ["a", "b"]
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Dictionaries (dict)</Text>: Key-value pairs. Example: {"{name: 'John', age: 25}"}
            </Text>
          </View>
        </View>

        {/* In-Depth Breakdown Box */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>In-Depth Breakdown</Text>

          {/* Integer */}
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Integer (int)</Text>: 
              Integers are whole numbers without any decimal parts. They can be positive, negative, or zero. 
              They are one of the most basic and widely used data types in programming.
            </Text>
          </View>
          <Text style={styles.cardText}>
            Integers are used in scenarios like counting items in a list, tracking scores in a game, 
            representing IDs, or iterating in loops. For example, if you want to track how many apples a user has, you would store it as an integer.
          </Text>
          <Text style={styles.cardText}>
            They support arithmetic operations like addition, subtraction, multiplication, division (resulting in a float), modulus, and exponentiation. 
            Integers are also memory-efficient compared to floats when storing whole numbers.
          </Text>

          {/* Float */}
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Float (float)</Text>: 
              Floats represent numbers with fractional parts (decimals). They allow precise calculations for real-world data.
            </Text>
          </View>
          <Text style={styles.cardText}>
            Common use cases include measurements, currency, averages, scientific calculations, or any scenario where decimals are required. 
            For example, storing a player's health as 75.5 or a bank balance of 1023.45.
          </Text>
          <Text style={styles.cardText}>
            Floats have limitations in precision due to binary representation. It's important to be careful with equality comparisons. For instance, 0.1 + 0.2 might not exactly equal 0.3 due to floating-point rounding errors.
          </Text>

          {/* String */}
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>String (str)</Text>: 
              Strings are sequences of characters, used to store textual data. They must be enclosed in quotes, either single or double.
            </Text>
          </View>
          <Text style={styles.cardText}>
            Strings can store letters, numbers, symbols, or even emoji. They are widely used for names, messages, paragraphs, or any text-related information. 
            You can concatenate strings, repeat them, or extract substrings using slicing.
          </Text>
          <Text style={styles.cardText}>
            Strings also support formatting, allowing dynamic text creation. For example: `Hello ${"Alice"}` in Python or template literals in JavaScript.
          </Text>

          {/* Boolean */}
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Boolean (bool)</Text>: 
              Booleans represent True or False values. They are fundamental for conditional logic and controlling the program's flow.
            </Text>
          </View>
          <Text style={styles.cardText}>
            Use booleans to check conditions, such as whether a user is logged in, a level is unlocked, or a value meets a certain criterion. 
            They are often the result of comparisons or logical operations.
          </Text>
          <Text style={styles.cardText}>
            Boolean logic allows combining multiple conditions using AND, OR, and NOT operators to make decisions in code.
          </Text>

          {/* List */}
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Lists (list)</Text>: 
              Lists are ordered collections that can store multiple items in a single variable. Items can be of any type, and lists are mutable.
            </Text>
          </View>
          <Text style={styles.cardText}>
            Lists are ideal for sequences like badges earned, tasks to complete, or messages in a chat. 
            They support operations like appending, removing, inserting, slicing, and iterating over items.
          </Text>
          <Text style={styles.cardText}>
            You can also nest lists within lists to represent more complex data structures, such as matrices or grids.
          </Text>

          {/* Dictionary */}
          <View style={styles.point}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.cardText}>
              <Text style={styles.code}>Dictionaries (dict)</Text>: 
              Dictionaries store data as key-value pairs. They are unordered but allow quick access to values via unique keys.
            </Text>
          </View>
          <Text style={styles.cardText}>
            Dictionaries are perfect for structured data, like storing user profiles, configurations, or inventory systems. 
            Example: {"{ 'name': 'John', 'age': 25, 'role': 'Admin' }"}.
          </Text>
          <Text style={styles.cardText}>
            Keys must be unique, while values can be any data type, including other dictionaries, enabling nested structures. 
            Dictionaries are widely used because they offer fast lookup and easy organization of complex data.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Docs;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ffffffff",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1EEDA2",
  },
  card: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#1EEDA2",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: "#1EEDA2",
  },
  cardText: {
    color: "#ffffffff",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  code: {
    backgroundColor: "rgba(30, 237, 162, 0.1)",
    color: "#1EEDA2",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: "500",
  },
  point: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    color: "#1EEDA2",
    fontSize: 18,
    marginRight: 8,
    lineHeight: 24,
  },
});
