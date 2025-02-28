import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Feather } from "@expo/vector-icons"

export default function SeriesScreen() {
  const openLink = (url) => {
    Linking.openURL(url)
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Why This Series is Important to Me</Text>
        <Text style={styles.headerSubtitle}>
          A personal reflection on how this series has impacted my life.
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          This series is more than just entertainment to me; it has shaped my perspective and influenced
          the way I approach challenges in life. The characters' journeys remind me that growth comes from
          overcoming adversity, and their stories inspire me to keep pushing forward no matter the obstacles.
        </Text>

        <Text style={styles.contentText}>
          It's not just about the plot or the visuals, but the deeper messages that resonate on a personal level.
          Every episode brings new insights, teaching me valuable life lessons that go beyond the screen.
        </Text>
      </View>

      <TouchableOpacity style={styles.videoButton} onPress={() => openLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
        <Text style={styles.videoButtonText}>Watch a Short Video</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8BC34A",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "center",
    marginBottom: 10,
  },
  contentContainer: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "left",
    lineHeight: 24,
    marginBottom: 20,
  },
  videoButton: {
    backgroundColor: "#8BC34A",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  videoButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})
