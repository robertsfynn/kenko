import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/img.png')}
        style={{ width: 225, height: 175 }}
      />
      <View style={styles.text}>
        <Text style={styles.title}>Want our advice?</Text>
        <Text style={styles.description}>
          To give you best experience we would like to ask a few quick questions
          to set everything up for you.
        </Text>
      </View>
      <Button text="Let's do it" onPress={() => console.log('CLICK')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginBottom: 150,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
