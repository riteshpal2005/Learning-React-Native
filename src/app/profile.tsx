import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView 
            style={styles.container}
        >
            <View style={styles.header}>
                <Image 
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={styles.logo}
                />
                <Text style={styles.title}>User Profile</Text>
            </View>
            <Text style={styles.bio}>Learning React Native is fun!</Text>
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    bio: {
        padding: 20,
        fontSize: 16
    },
});