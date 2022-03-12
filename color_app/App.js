import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lang1Screen from './languages/Lang1';
import Lang2Screen from './languages/Lang2';
import Lang3Screen from './languages/Lang3';
import Lang4Screen from './languages/Lang4';
import Acknowledge from './Ack';

import AudioScreen from './Audio';
import Audio1Screen from './audioLists/Lang1Audio';
import Audio2Screen from './audioLists/Lang2Audio';
import Audio3Screen from './audioLists/Lang3Audio';
import Audio4Screen from './audioLists/Lang4Audio';

const Stack = createNativeStackNavigator();


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Image style={styles.discImg} source={require("./assets/disciples.png")} />

      <Text style={styles.beginText}>Choose a language</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('Lang1')}>
        <Text style={styles.beginText}>Adnyamathanha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Lang2')}>
        <Text style={styles.beginText}>Burarra</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Lang3')}>
        <Text style={styles.beginText}>Murrinhpatha</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Lang4')}>
        <Text style={styles.beginText}>Pitjantjatjara</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lang1" component={Lang1Screen} />
        <Stack.Screen name="Lang2" component={Lang2Screen} />
        <Stack.Screen name="Lang3" component={Lang3Screen} />
        <Stack.Screen name="Lang4" component={Lang4Screen} />
        <Stack.Screen name="Audio" component={AudioScreen} />
        <Stack.Screen name="Acknowledge" component={Acknowledge} />
        <Stack.Screen name="AudioList1" component={Audio1Screen} />
        <Stack.Screen name="AudioList2" component={Audio2Screen} />
        <Stack.Screen name="AudioList3" component={Audio3Screen} />
        <Stack.Screen name="AudioList4" component={Audio4Screen} />
      </Stack.Navigator>
    </NavigationContainer>
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

  discImg: {
    width: 400,
    height: 300,
    margin: 5,
  }
});
