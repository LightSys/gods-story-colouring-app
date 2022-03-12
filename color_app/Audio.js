import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AudioScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.audioBtn} source={require("./assets/audio.png")} />


      <Text style={styles.beginText}>Choose a language</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('AudioList1')}>
        <Text style={styles.beginText}>Adnyamathanha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AudioList2')}>
        <Text style={styles.beginText}>Burarra</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AudioList3')}>
        <Text style={styles.beginText}>Murrinhpatha</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AudioList4')}>
        <Text style={styles.beginText}>Pitjantjatjara</Text>
      </TouchableOpacity>

      <Text style={styles.beginText}>Get the Aboriginal Bibles app</Text>

      <TouchableOpacity>
        <Image style={styles.gPlayBtn} source={require("./assets/gplay.png")} />
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

  beginText: {
    fontSize: 20,
    color: "#000",
    padding: 10,
  },

  audioBtn: {
    width: 90,
    height: 90,
    marginBottom: 50
  },

  gPlayBtn: {
    marginTop: 50,
    width: 300,
    height: 100
  }
});
