import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";
import SideMenu from "../components/SideMenu";

export default function HomeScreen() {

    const router = useRouter();

    const [menuOpen, setMenuOpen] =
        useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity
                    onPress={() =>
                        setMenuOpen(true)
                    }
                >
                    <Text style={styles.menuIcon}>
                        ☰
                    </Text>
                </TouchableOpacity>

                <Text style={styles.greeting}>
                    Hola, Ana 👋
                </Text>

                <Text style={styles.profile}>
                    👤
                </Text>

            </View>

            <View style={styles.content}>
                <Text style={styles.title}>
                    ¡Bienvenida!
                </Text>

                <Text style={styles.subtitle}>
                    Nos alegra verte nuevamente.
                </Text>
            </View>

            <SideMenu
                visible={menuOpen}
                onClose={() =>
                    setMenuOpen(false)
                }
                onProfile={() => {
                    setMenuOpen(false);
                    router.push("/profile");
                }}
                onSettings={() => {
                    setMenuOpen(false);
                    router.push("/settings");
                }}
                onLogout={() => {
                    setMenuOpen(false);
                    router.replace("/");
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#FFFFFF",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    menuIcon: {
        fontSize: 24,
    },
    greeting: {
        fontSize: 18,
        fontWeight: "bold",
    },
    profile: {
        fontSize: 24,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#6B7280",
    },
});
