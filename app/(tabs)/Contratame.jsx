import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Feather } from "@expo/vector-icons"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HireMeScreen() {
  const openLink = (url) => {
    Linking.openURL(url)
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hire Me</Text>
        <Text style={styles.headerSubtitle}>Let's work together on your next project</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/yo.jpg')}
          style={styles.profileImage}
        />

        <Text style={styles.profileName}>Yarbis Beltre Mercedes</Text>
        <Text style={styles.profileTitle}>Software Developer</Text>

        <Text style={styles.profileBio}>
          I'm a passionate developer specializing in React Native mobile applications. With a strong background in
          frontend development and a love for anime, I create engaging and user-friendly applications that deliver
          exceptional experiences.
        </Text>
      </View>

      <View style={styles.skillsContainer}>
        <Text style={styles.sectionTitle}>Skills</Text>

        <View style={styles.skillsGrid}>
            <View style={styles.skillItem}>
                <FontAwesome5 name="react" size={24} color="#8BC34A" />
                <Text style={styles.skillName}>React</Text>
            </View>

          <View style={styles.skillItem}>
            <Feather name="smartphone" size={24} color="#8BC34A" />
            <Text style={styles.skillName}>React Native</Text>
          </View>

          <View style={styles.skillItem}>
            <Feather name="code" size={24} color="#8BC34A" />
            <Text style={styles.skillName}>C#</Text>
          </View>

          <View style={styles.skillItem}>
            <Ionicons name="logo-javascript" size={24} color="#8BC34A" />
            <Text style={styles.skillName}>JavaScript</Text>
          </View>

          <View style={styles.skillItem}>
            <Ionicons name="logo-python" size={24} color="#8BC34A" />
            <Text style={styles.skillName}>Python</Text>
          </View>

          <View style={styles.skillItem}>
            <Feather name="git-branch" size={24} color="#8BC34A" />
            <Text style={styles.skillName}>Git</Text>
          </View>

          <View style={styles.skillItem}>
            <Feather name="database" size={24} color="#8BC34A" />
            <Text style={styles.skillName}>SQL Server</Text>
          </View>

          <View style={styles.skillItem}>
            <Feather name="server" size={24} color="#8BC34A" />
            <Text style={styles.skillName}>RESTful APIs</Text>
          </View>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.sectionTitle}>Contact Me</Text>

        <TouchableOpacity style={styles.contactItem} onPress={() => openLink("mailto:yarbisbeme@gmail.com")}>
          <Feather name="mail" size={24} color="#8BC34A" />
          <Text style={styles.contactText}>yarbisbeme@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => openLink("tel:+1234567890")}>
          <Feather name="phone" size={24} color="#8BC34A" />
          <Text style={styles.contactText}>+1 (829) 279-0232</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => openLink("https://github.com/yarbisbeme")}>
          <Feather name="github" size={24} color="#8BC34A" />
          <Text style={styles.contactText}>github.com/yarbisbeme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={() => openLink("https://linkedin.com/in/yarbisbeltremercedes")}>
          <Feather name="linkedin" size={24} color="#8BC34A" />
          <Text style={styles.contactText}>Yarbis Beltre Mercedes</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.hireButton}
        onPress={() => openLink("mailto:yarbisbeme@gmail.com?subject=Project%20Inquiry")}
      >
        <Text style={styles.hireButtonText}>Contact Me About Your Project</Text>
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
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#8BC34A",
    resizeMode: "cover",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
  },
  profileTitle: {
    fontSize: 18,
    color: "#8BC34A",
    marginBottom: 15,
  },
  profileBio: {
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "center",
    lineHeight: 24,

  },
  skillsContainer: {
    padding: 20,
    backgroundColor: "#1A1A1A",
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8BC34A",
    marginBottom: 15,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  skillItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  skillName: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  contactContainer: {
    padding: 20,
    backgroundColor: "#1A1A1A",
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  contactText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  hireButton: {
    backgroundColor: "#8BC34A",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  hireButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})

