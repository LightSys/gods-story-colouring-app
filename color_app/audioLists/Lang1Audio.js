import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';

// class Post extends
export default function Audio1Screen() {
  const audio = [
    {name: "Page1 BUR.mp3", key: 1},
    {name: "Page2 BUR.mp3", key: 2},
    {name: "Page3 BUR.mp3", key: 3},
    {name: "Page4 BUR.mp3", key: 4},
    {name: "Page5 BUR.mp3", key: 5},
    {name: "Page6 BUR.mp3", key: 6},
    {name: "Page7 BUR.mp3", key: 7},
    {name: "Page8 BUR.mp3", key: 8}, 
    {name: "Page9 BUR.mp3", key: 9},
    {name: "Page10 BUR.mp3", key: 10},
    {name: "Page11 BUR.mp3", key: 11},
    {name: "Page12 BUR.mp3", key: 12},
    {name: "Page13 BUR.mp3", key: 13 },
    {name: "Page14 BUR.mp3", key: 14 },
    {name: "Page15 BUR.mp3", key: 15 },
    {name: "Page16 BUR.mp3", key: 16 },
    {name: "Page17 BUR.mp3", key: 17 },
    {name: "Page18 BUR.mp3", key: 18 },
    {name: "Page19 BUR.mp3", key: 19 },
    {name: "Page20 BUR.mp3", key: 20 },
    {name: "Page21 BUR.mp3", key: 21 },
    {name: "Page22 BUR.mp3", key: 22 },
    {name: "Page23 BUR.mp3", key: 23 },
    {name: "Page24 BUR.mp3", key: 24 },
    {name: "Page25 BUR.mp3", key: 25 },
    {name: "Page26 BUR.mp3", key: 26 },
    {name: "Page27 BUR.mp3", key: 27 },
    {name: "Page28 BUR.mp3", key: 28 },
    {name: "Page29 BUR.mp3", key: 29 },
    {name: "Page30 BUR.mp3", key: 30 },
    {name: "Page31 BUR.mp3", key: 31 },
    {name: "Page32 BUR.mp3", key: 32 },
    {name: "Page33 BUR.mp3", key: 33 },
    {name: "Page34 BUR.mp3", key: 34 },
    {name: "Page35 BUR.mp3", key: 35 },
    {name: "Page36 BUR.mp3", key: 36 },
    {name: "Page37 BUR.mp3", key: 37 },
    {name: "Page38 BUR.mp3", key: 38 },
    {name: "Page39 BUR.mp3", key: 39 },
    {name: "Page40 BUR.mp3", key: 40 },
    {name: "Page41 BUR.mp3", key: 41 },
    {name: "Page42 BUR.mp3", key: 42 },
    {name: "Page43 BUR.mp3", key: 43 },
    {name: "Page44 BUR.mp3", key: 44 },
    {name: "Page45 BUR.mp3", key: 45 },
    {name: "Page46 BUR.mp3", key: 46 },
    {name: "Page47 BUR.mp3", key: 47 },
    {name: "Page48 BUR.mp3", key: 48 },
  ]

  return (
    <View style={styles.container}>
      <Image style={styles.audioBtn} source={require("../assets/audio.png")} />

      <FlatList 
        data={audio}
        keyExtractor={(item) => item.id}
        style={{width: '100%', marginBottom: 50}}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.audioContainer}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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

  audioBtn: {
    width: 90,
    height: 90,
    marginBottom: 50
  },

  audioContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#e9b96e',
    marginBottom: 10,
  }
});
