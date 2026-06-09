import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// const DATA = [
//     { id: '1', title: 'First Item' },
//     { id: '2', title: 'Second Item' },
// ];

const DATA = [
    { id: '1', task: 'Buy Milk' },
    { id: '2', task: 'Buy Banana' },
    { id: '3', task: 'Buy Mango' },
];

export default function FeedScreen() {
    return (
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => console.log('Tapped', item.task)}>
                    <View style={styles.card}>
                        <Text>{item.task}</Text>
                    </View>
                </TouchableOpacity>
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