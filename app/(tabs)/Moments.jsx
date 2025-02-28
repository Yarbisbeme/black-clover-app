"use client"

import { useState } from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Feather } from "@expo/vector-icons"
import { Linking } from "react-native"

const moments = [
  {
    id: "1",
    title: "Asta Receives His Grimoire",
    image: require("@/assets/images/grimorio.png"),
    description:
      "One of the most pivotal moments in the series when Asta, despite being born without magic, receives a mysterious five-leaf clover grimoire containing anti-magic swords.",
    videoUrl: "https://www.youtube.com/watch?v=9r7WdruaGLM",
  },
  {
    id: "2",
    title: "Black Bulls vs. Vetto",
    image: require("@/assets/images/vetto.png"),
    description:
      "An incredible battle where the Black Bulls team up to fight against Vetto of the Eye of the Midnight Sun. This battle showcases the growth and teamwork of the Black Bulls members.",
    videoUrl: "https://www.youtube.com/watch?v=AwI4xGlwRVE",
  },
  {
    id: "3",
    title: "Asta and Yuno's Promise",
    image: require("@/assets/images/astayuno.png"),
    description:
      "The childhood promise between Asta and Yuno to compete to become the Wizard King. This moment establishes their rivalry and friendship that drives the entire series.",
    videoUrl: "https://www.youtube.com/watch?v=pHZoqBQ0_To",
  },
]

export default function MomentsScreen() {
  const openMomentDetails = (moment) => {
    Linking.openURL(moment.videoUrl).catch((err) =>
      console.error("Error opening URL: ", err)
    )
  }

  const renderMomentItem = ({ item }) => (
    <TouchableOpacity style={styles.momentCard} onPress={() => openMomentDetails(item)}>
      <Image source={item.image} style={styles.momentImage} />
      <View style={styles.momentTitleContainer}>
        <Text style={styles.momentTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.headerTitle}>Epic Moments</Text>
      <Text style={styles.headerSubtitle}>Unforgettable scenes from Black Clover</Text>

      <FlatList
        data={moments}
        renderItem={renderMomentItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.momentsList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8BC34A",
    textAlign: "center",
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "center",
    marginBottom: 20,
  },
  momentsList: {
    paddingBottom: 20,
  },
  momentCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3,
  },
  momentImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  momentTitleContainer: {
    padding: 15,
  },
  momentTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})
