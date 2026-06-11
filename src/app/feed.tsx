import { FlatList, Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

interface User {
    id: number,
    name: string,
    email: string,
}

export default function FeedScreen() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <ActivityIndicator
            size='large'
            color='#0000ff'
            style={{ flex: 1 }}
        />
    }

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ padding: 20, borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
});