import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Lang2Screen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>God's Story for the Outback</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image style={styles.homeBtn} source={require("../assets/home.png")} />
      </TouchableOpacity>

      <Image style={styles.brush} source={require("../assets/brush.png")} />

      <TouchableOpacity style={styles.colourBtn}>
        <Text>Start Colouring</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Audio')}>
        <Image style={styles.audioBtn} source={require("../assets/audio.png")} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Acknowledge')}>
        <Image style={styles.ackBtn} source={require("../assets/acknowledge.png")} />
      </TouchableOpacity>

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

  homeBtn: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  brush: {
    width: 100,
    height: 100
  },

  colourBtn: {
    width: 150,
    height: 60,
    backgroundColor: "orange"
  },

  audioBtn: {
    width: 90,
    height: 90,
  },

  ackBtn: {
    width: 90,
    height: 90,
  }
});
