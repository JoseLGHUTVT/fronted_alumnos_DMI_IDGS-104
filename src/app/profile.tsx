import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { useRouter } from "expo-router";

export default function ProfileScreen() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity
                    onPress={() => router.back()}
                >
                    <Text style={styles.back}>
                        ←
                    </Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>
                    Mi Perfil
                </Text>

            </View>

            <View style={styles.profile}>

                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        A
                    </Text>
                </View>

                <Text style={styles.name}>
                    Ana García
                </Text>

                <Text style={styles.email}>
                    ana@test.com
                </Text>

            </View>

            <View style={styles.options}>
                <Text>👤  Editar perfil</Text>
                <Text>🔒  Cambiar contraseña</Text>
                <Text>🔔  Notificaciones</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    back: {
        fontSize: 24,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    profile: {
        alignItems: "center",
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    avatarText: {
        fontSize: 48,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: "#666",
    },
    options: {
        marginTop: 20,
    },
});