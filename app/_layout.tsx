// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useState } from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!fontsLoaded) return null; // wait for fonts

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          // login page must match your file path: app/login/index.tsx
          <Stack.Screen
            name="login/index"
            options={{ headerShown: false }}
            initialParams={{ onLogin: () => setIsLoggedIn(true) }}
          />
        ) : (
          // main tabs after login
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        )}

        {/* 404 fallback */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
