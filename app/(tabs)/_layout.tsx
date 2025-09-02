import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white", // ✅ active text color
        tabBarInactiveTintColor: "black", // ✅ inactive text color
        tabBarStyle: {
          backgroundColor: "#1EEDA2", // ✅ green background
        },
      }}
    >
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/learn.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "white" : "black",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Game",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/game.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "white" : "black",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: "Plus",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/plus.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "white" : "black",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="competition"
        options={{
          title: "Competition",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/competition.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "white" : "black",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/profile.png")}
              style={{
                width: 28,
                height: 28,
                tintColor: focused ? "white" : "black",
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
