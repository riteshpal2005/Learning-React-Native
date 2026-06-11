import { View, Text, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { useContext } from 'react';
import { AppContext, ThemeContext } from './_layout';

export default function FeedScreen() {
    const currentTheme = useContext(ThemeContext);
    const currentUser = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {currentUser}</Text>
            <Text style={styles.title}>The theme is {currentTheme}</Text>
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
        marginBottom: 10
    },
});