import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { Link, router } from 'expo-router';
import { useContext } from 'react';
import { AppContext, ThemeContext } from './_layout';
import { FontAwesome5 } from '@expo/vector-icons';

export default function FeedScreen() {
    const currentTheme = useContext(ThemeContext);
    const currentUser = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <Text variant='titleLarge'>Welcome, {currentUser}</Text>
                    <FontAwesome5 name='user' size={100} color='gray' />
                    <Card.Actions>
                        <Button mode='contained' onPress={() => { router.push('/feed') }}>Go to Feed</Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
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