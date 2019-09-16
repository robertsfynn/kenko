import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/img.png')}
        style={{ width: 225, height: 175 }}
      />
      <View>
        <Text style={styles.title}>Want our advice?</Text>
        <Text>
          To give you best experience we would like to ask a few quick questions
          to set everything up for you.
        </Text>
      </View>
      <TouchableOpacity onPress={() => console.log('click')}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
        >
          <LinearGradient
            colors={['#23253A', '#5063EE']}
            style={{ paddingHorizontal: 50, paddingVertical: 25 }}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0.0, 0.99]}
          >
            <Text style={{ color: 'white', textTransform: 'uppercase' }}>
              Let's do it
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
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
  },
});
