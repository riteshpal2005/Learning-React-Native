import { View, Text, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            {/* Method 1: The Declarative Link component */}
            <Link style={styles.link} href='/feed'>Go to Feed</Link>

            {/* Method 2: The Imperative router object (good for buttons/functions) */}
            <Text style={styles.link} onPress={() => router.push('/profile')}>Go to Profle</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    link: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 10},
});