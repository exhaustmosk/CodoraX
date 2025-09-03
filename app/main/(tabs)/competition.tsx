import React, { useRef } from 'react';
import { Animated, Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';

export default function Competition() {
  // Animated values for sections
  const scaleQuizzes = useRef(new Animated.Value(1)).current;
  const scaleBadges = useRef(new Animated.Value(1)).current;
  const scaleHighscore = useRef(new Animated.Value(1)).current;

  // Animated values for buttons
  const scaleBtn1 = useRef(new Animated.Value(1)).current;
  const scaleBtn2 = useRef(new Animated.Value(1)).current;
  const scaleBtn3 = useRef(new Animated.Value(1)).current;

  const handlePressIn = (scale: Animated.Value) => {
    Animated.spring(scale, { toValue: 1.05, useNativeDriver: true }).start();
  };

  const handlePressOut = (scale: Animated.Value) => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Heading PNG */}
      <Image
        source={require('../../assets/images/Competition/Heading.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />

      {/* Quizzes Section */}
      <View style={styles.sectionWrapper}>
        <Animated.Image
          source={require('../../assets/images/Competition/Quizzes.png')}
          style={[
            styles.sectionImage,
            {
              transform: [{ scale: scaleQuizzes }],
              shadowColor: 'white',
              shadowOpacity: scaleQuizzes.interpolate({
                inputRange: [1, 1.05],
                outputRange: [0, 0.7],
              }),
              shadowRadius: 50,
              shadowOffset: { width: 5, height: 20 },
            },
          ]}
          resizeMode="contain"
        />
        <Pressable
          style={styles.buttonWrapper}
          onPressIn={() => handlePressIn(scaleBtn1)}
          onPressOut={() => handlePressOut(scaleBtn1)}
          onPress={() => console.log('Quizzes clicked')}
        >
          <Animated.Image
            source={require('../../assets/images/Competition/Button1.png')}
            style={[
              styles.buttonImage,
              { transform: [{ scale: scaleBtn1 }] },
            ]}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      {/* Badges Section */}
      <View style={styles.sectionWrapper}>
        <Animated.Image
          source={require('../../assets/images/Competition/Badges.png')}
          style={[
            styles.sectionImage,
            {
              transform: [{ scale: scaleBadges }],
              shadowColor: 'lime',
              shadowOpacity: scaleBadges.interpolate({
                inputRange: [1, 1.05],
                outputRange: [0, 0.7],
              }),
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 0 },
            },
          ]}
          resizeMode="contain"
        />
        <Pressable
          style={styles.buttonWrapper}
          onPressIn={() => handlePressIn(scaleBtn2)}
          onPressOut={() => handlePressOut(scaleBtn2)}
          onPress={() => console.log('Badges clicked')}
        >
          <Animated.Image
            source={require('../../assets/images/Competition/Button2.png')}
            style={[
              styles.buttonImage,
              { transform: [{ scale: scaleBtn2 }] },
            ]}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      {/* Highscore Section */}
      <View style={styles.sectionWrapper}>
        <Animated.Image
          source={require('../../assets/images/Competition/Highscore.png')}
          style={[
            styles.sectionImage,
            {
              transform: [{ scale: scaleHighscore }],
              shadowColor: 'lime',
              shadowOpacity: scaleHighscore.interpolate({
                inputRange: [1, 1.05],
                outputRange: [0, 0.7],
              }),
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 0 },
            },
          ]}
          resizeMode="contain"
        />
        <Pressable
          style={styles.buttonWrapper}
          onPressIn={() => handlePressIn(scaleBtn3)}
          onPressOut={() => handlePressOut(scaleBtn3)}
          onPress={() => console.log('Highscore clicked')}
        >
          <Animated.Image
            source={require('../../assets/images/Competition/Button3.png')}
            style={[
              styles.buttonImage,
              { transform: [{ scale: scaleBtn3 }] },
            ]}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#000000ff',
    alignItems: 'center',
  },
  headerImage: {
    width: 300,
    height: 100,
    marginTop: 60,
    marginBottom: 20,
  },
  sectionWrapper: {
    width: '100%',
    marginBottom: 16,
    position: 'relative',
  },
  sectionImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 250, // adjust as needed
  },
  buttonImage: {
    width: 70,
    height: 60,
  },
});
