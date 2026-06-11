import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

const ProfileScreen = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'blue', borderRadius: 20 }, animatedStyle]} />
      <Button onPress={() => (
        scale.value = withSpring(scale.value + 0.5))}
      >
        Grow Sqaure
      </Button>
    </View>
  );
};

export default ProfileScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     header: {
//         alignItems: 'center',
//         padding: 20
//     },
//     logo: {
//         width: 50,
//         height: 50,
//         marginBottom: 10
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold'
//     },
//     bio: {
//         padding: 20,
//         fontSize: 16
//     },
// });