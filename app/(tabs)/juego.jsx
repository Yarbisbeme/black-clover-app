import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const techIcons = ["logo-react", "logo-javascript", "logo-python", "logo-github"];

export default function CodeTapperGame() {
  const [score, setScore] = useState(0);
  const [currentIcon, setCurrentIcon] = useState("logo-react");
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  const handleTap = () => {
    if (!gameOver) {
      setScore(score + 1);
      const randomIndex = Math.floor(Math.random() * techIcons.length);
      setCurrentIcon(techIcons[randomIndex]);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(15);
    setGameOver(false);
    setCurrentIcon("logo-react");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Code Tapper</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
      {gameOver ? (
        <>
          <Text style={styles.gameOver}>Game Over! Final Score: {score}</Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
            <Text style={styles.restartText}>Play Again</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleTap}>
          <Ionicons name={currentIcon} size={60} color="#FF5252" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5252",
  },
  score: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
  timer: {
    fontSize: 16,
    color: "#CCCCCC",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1A1A1A",
    padding: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  gameOver: {
    fontSize: 18,
    color: "#FF5252",
    marginTop: 20,
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF5252",
    borderRadius: 5,
  },
  restartText: {
    color: "white",
    fontWeight: "bold",
  },
});
