// app/game-intro/index.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

// update these paths if your assets folder is elsewhere
const LOGOS = [
  require("../../assets/images/python2.png"),
  require("../../assets/images/html2.png"),
  require("../../assets/images/javascript.png"),
];

type Item = {
  id: string;
  x: number;
  y: number;
  speed: number;
  img: any;
};

const TARGET_SCORE = 3;

export default function GameIntro() {
  const router = useRouter();

  // responsive sizes
  const ITEM_SIZE = Math.min(64, Math.floor(width * 0.14));
  const BASKET_WIDTH = Math.min(120, Math.floor(width * 0.25));
  const BASKET_HEIGHT = 36;
  const BASKET_BOTTOM = 72;

  const [items, setItems] = useState<Item[]>([]);
  const itemsRef = useRef<Item[]>([]);
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);

  const [basketX, setBasketX] = useState(width / 2 - BASKET_WIDTH / 2);

  const rafRef = useRef<number | null>(null);
  const spawnTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // spawn new item function
  const spawnItem = () => {
    const x = Math.random() * (width - ITEM_SIZE);
    const img = LOGOS[Math.floor(Math.random() * LOGOS.length)];
    const speed = 120 + Math.random() * 150; // px per second
    const newItem: Item = { id: `${Date.now()}-${Math.random()}`, x, y: -ITEM_SIZE, speed, img };
    itemsRef.current = [...itemsRef.current, newItem];
    setItems([...itemsRef.current]);
  };

  // start spawn timer
  useEffect(() => {
    spawnTimerRef.current = setInterval(spawnItem, 1100);
    spawnItem(); // spawn immediately
    return () => {
      if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
    };
  }, []);

  // game loop using requestAnimationFrame
  useEffect(() => {
    let last = Date.now();

    const step = () => {
      const now = Date.now();
      const dt = (now - last) / 1000; // seconds
      last = now;

      const next: Item[] = [];
      let caughtThisFrame = 0;

      for (const it of itemsRef.current) {
        const newY = it.y + it.speed * dt;

        const basketTop = height - BASKET_BOTTOM - BASKET_HEIGHT;
        const basketLeft = basketX;
        const basketRight = basketX + BASKET_WIDTH;
        const itemLeft = it.x;
        const itemRight = it.x + ITEM_SIZE;
        const itemBottom = newY + ITEM_SIZE;

        const isCaught =
          itemBottom >= basketTop &&
          itemRight >= basketLeft + 6 &&
          itemLeft <= basketRight - 6;

        if (isCaught) {
          caughtThisFrame += 1;
        } else if (newY < height) {
          next.push({ ...it, y: newY });
        }
      }

      if (caughtThisFrame > 0) {
        scoreRef.current += caughtThisFrame;
        setScore(scoreRef.current);
      }

      itemsRef.current = next;
      setItems(next);

      // check win
      if (scoreRef.current >= TARGET_SCORE) {
        setTimeout(() => router.replace("/login"), 600);
        return; // stop loop
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [basketX]);

  // touch-drag basket
  const onResponderMove = (e: GestureResponderEvent) => {
    const x = e.nativeEvent.locationX;
    setBasketX(Math.min(Math.max(0, x - BASKET_WIDTH / 2), width - BASKET_WIDTH));
  };

  const moveLeft = () => setBasketX(x => Math.max(0, x - Math.max(20, BASKET_WIDTH * 0.2)));
  const moveRight = () => setBasketX(x => Math.min(width - BASKET_WIDTH, x + Math.max(20, BASKET_WIDTH * 0.2)));

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderMove={onResponderMove}
    >
      <Text style={styles.header}>Catch the coding logos</Text>
      <Text style={styles.score}>Score: {score} / {TARGET_SCORE}</Text>

      {items.map(it => (
        <Image
          key={it.id}
          source={it.img}
          style={[styles.logo, { width: ITEM_SIZE, height: ITEM_SIZE, left: it.x, top: it.y }]}
        />
      ))}

      <View
        style={[styles.basket, { width: BASKET_WIDTH, height: BASKET_HEIGHT, left: basketX, bottom: BASKET_BOTTOM, borderRadius: BASKET_HEIGHT/2 }]}
      />

      {/* fallback buttons */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={moveLeft} style={styles.controlBtn}><Text style={styles.controlText}>◀</Text></TouchableOpacity>
        <TouchableOpacity onPress={moveRight} style={styles.controlBtn}><Text style={styles.controlText}>▶</Text></TouchableOpacity>
      </View>

      {score >= TARGET_SCORE && (
        <View style={styles.winOverlay}>
          <Text style={styles.winText}>🎉 You unlocked Login!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b0b0b" },
  header: { color: "#fff", fontSize: 20, textAlign: "center", marginTop: 26, fontWeight: "700" },
  score: { color: "#ddd", fontSize: 16, textAlign: "center", marginTop: 8, marginBottom: 6 },
  logo: { position: "absolute", resizeMode: "contain" },
  basket: { position: "absolute", backgroundColor: "#1EEDA2", shadowColor: "#1EEDA2", shadowOpacity: 0.25, shadowOffset: { width:0, height:4 }, shadowRadius:6, elevation:6 },
  controls: { position: "absolute", bottom: 12, left:0, right:0, flexDirection:"row", justifyContent:"space-around" },
  controlBtn: { backgroundColor:"#222", paddingHorizontal:18, paddingVertical:10, borderRadius:10 },
  controlText: { color:"#fff", fontSize:22 },
  winOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor:"rgba(0,0,0,0.45)", justifyContent:"center", alignItems:"center" },
  winText: { color:"#1EEDA2", fontSize:28, fontWeight:"800" }
});
