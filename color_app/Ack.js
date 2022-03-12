import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Acknowledge() {
  return (
    <View style={styles.container}>
      <Text>We live to serve Him who has called us.</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD479',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
