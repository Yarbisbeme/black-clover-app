
import { View, Text, ScrollView, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
    return (
        <ScrollView style={styles.container}>
        <StatusBar style="light" />

        <View style={styles.header}>
            <Text style={styles.headerTitle}>About Black Clover</Text>
        </View>

        <Image
            source={require('@/assets/images/trebo.png')}
            style={styles.bannerImage}
        />

        <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>The Series</Text>
            <Text style={styles.infoText}>
            Black Clover is a Japanese manga series written and illustrated by Yūki Tabata. The story centers around Asta,
            a young boy born without any magic power in a world where magic is everything. Despite this, Asta dreams of
            becoming the next Wizard King, the strongest mage in the kingdom.
            </Text>

            <View style={styles.infoRow}>
            <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Creator</Text>
                <Text style={styles.infoValue}>Yūki Tabata</Text>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>First Published</Text>
                <Text style={styles.infoValue}>February 16, 2015</Text>
            </View>
            </View>

            <View style={styles.infoRow}>
            <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Anime Studio</Text>
                <Text style={styles.infoValue}>Studio Pierrot</Text>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Anime Premiere</Text>
                <Text style={styles.infoValue}>October 3, 2017</Text>
            </View>
            </View>

            <View style={styles.infoRow}>
            <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Seasons</Text>
                <Text style={styles.infoValue}>4 Seasons</Text>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Episodes</Text>
                <Text style={styles.infoValue}>170 Episodes</Text>
            </View>
            </View>
        </View>

        <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Story Synopsis</Text>
            <Text style={styles.infoText}>
            In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day.
            While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the
            age of fifteen, both receive grimoires, magic books that amplify their holder's magic. Asta's is a rare
            five-leaf clover grimoire, which gives him the power of anti-magic. Being opposite but good rivals, Yuno and
            Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up
            is never an option!
            </Text>
        </View>

        <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Magic System</Text>
            <Text style={styles.infoText}>
            In the world of Black Clover, magic is an integral part of everyday life. Each person has a specific type of
            magic they can use, which is determined at birth. Magic types range from elemental magic like fire, water, and
            wind to more specialized forms like spatial magic, transformation magic, and creation magic.
            </Text>
            <Text style={styles.infoText}>
            At the age of 15, mages receive a grimoire that enhances their magical abilities. The number of clovers on a
            grimoire indicates its rarity and power: three-leaf clovers are standard, four-leaf clovers are rare and
            signify good luck, while five-leaf clovers are extremely rare and are said to contain a devil.
            </Text>
        </View>
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
        bannerImage: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        },
        infoSection: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        },
        sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#8BC34A",
        marginBottom: 10,
        },
        infoText: {
        fontSize: 16,
        color: "#FFFFFF",
        lineHeight: 24,
        marginBottom: 15,
        textAlign: "justify",
        },
        infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        },
        infoItem: {
        flex: 1,
        },
        infoLabel: {
        fontSize: 14,
        color: "#AAAAAA",
        marginBottom: 5,
        },
        infoValue: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "bold",
        },
})  

export default About