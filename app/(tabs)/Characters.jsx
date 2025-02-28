"use client"

import { useState } from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Feather } from "@expo/vector-icons"

const characters = [
  {
    id: "1",
    name: "Asta",
    image: require("@/assets/images/Asta.webp"),
    description:
      "The main protagonist of Black Clover. Born without any magic in a world where magic is everything, Asta compensates with physical strength and receives a five-leaf clover grimoire with mysterious anti-magic swords.",
    attributes: {
      magic: "Anti-Magic",
      guild: "Black Bulls",
      rank: "Magic Knight",
      weapon: "Demon-Slayer Sword, Demon-Dweller Sword",
    },
  },
  {
    id: "2",
    name: "Yuno",
    image: require("@/assets/images/Yuno.webp"),
    description:
      "Asta's foster brother and rival. Unlike Asta, Yuno was blessed with immense magical power and talent. He possesses a four-leaf clover grimoire and wind magic.",
    attributes: {
      magic: "Wind Magic",
      guild: "Golden Dawn",
      rank: "Magic Knight",
      weapon: "Wind Spirit: Sylph",
    },
  },
  {
    id: "3",
    name: "Noelle Silva",
    image: require("@/assets/images/Noelle.webp"),
    description:
      "A royal from the Silva family who struggles to control her powerful water magic. Despite being looked down upon by her siblings, she joins the Black Bulls and gradually improves her abilities.",
    attributes: {
      magic: "Water Magic",
      guild: "Black Bulls",
      rank: "Magic Knight",
      weapon: "Wand",
    },
  },
  {
    id: "4",
    name: "Yami Sukehiro",
    image: require("@/assets/images/Yami.png"),
    description:
      "The captain of the Black Bulls. He uses rare Dark Magic and is known for his laid-back yet intimidating personality. He believes in surpassing one's limits.",
    attributes: {
      magic: "Dark Magic",
      guild: "Black Bulls (Captain)",
      rank: "Magic Knight Captain",
      weapon: "Katana",
    },
  },
]

export default function CharactersScreen() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const openCharacterDetails = (character) => {
    setSelectedCharacter(character)
    setModalVisible(true)
  }

  const renderCharacterItem = ({ item }) => (
    <TouchableOpacity style={styles.characterCard} onPress={() => openCharacterDetails(item)}>
        <Image source={item.image} style={styles.characterThumbnail} />
        <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.headerTitle}>Characters</Text>
      <Text style={styles.headerSubtitle}>Meet the heroes of Black Clover</Text>

      <FlatList
        data={characters}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.characterList}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Feather name="x" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            {selectedCharacter && (
              <ScrollView>
                <Image source={selectedCharacter.image} style={styles.characterDetailImage} />
                <Text style={styles.characterDetailName}>{selectedCharacter.name}</Text>
                <Text style={styles.characterDescription}>{selectedCharacter.description}</Text>

                <View style={styles.attributesContainer}>
                  <Text style={styles.attributesTitle}>Attributes</Text>

                  <View style={styles.attributeRow}>
                    <Text style={styles.attributeLabel}>Magic:</Text>
                    <Text style={styles.attributeValue}>{selectedCharacter.attributes.magic}</Text>
                  </View>

                  <View style={styles.attributeRow}>
                    <Text style={styles.attributeLabel}>Guild:</Text>
                    <Text style={styles.attributeValue}>{selectedCharacter.attributes.guild}</Text>
                  </View>

                  <View style={styles.attributeRow}>
                    <Text style={styles.attributeLabel}>Rank:</Text>
                    <Text style={styles.attributeValue}>{selectedCharacter.attributes.rank}</Text>
                  </View>

                  <View style={styles.attributeRow}>
                    <Text style={styles.attributeLabel}>Weapon:</Text>
                    <Text style={styles.attributeValue}>{selectedCharacter.attributes.weapon}</Text>
                  </View>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
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
  characterList: {
    paddingBottom: 20,
  },
  characterCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  characterThumbnail: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
  },
  characterName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    margin: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 5,
  },
  characterDetailImage: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  characterDetailName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8BC34A",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  characterDescription: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 24,
    padding: 15,
    textAlign: "justify",
  },
  attributesContainer: {
    backgroundColor: "#252525",
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  attributesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8BC34A",
    marginBottom: 10,
  },
  attributeRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  attributeLabel: {
    fontSize: 16,
    color: "#CCCCCC",
    width: 80,
  },
  attributeValue: {
    fontSize: 16,
    color: "#FFFFFF",
    flex: 1,
  },
})

