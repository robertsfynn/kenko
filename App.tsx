import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';
import Button from './components/Button';
import { AppLoading } from 'expo';

interface State {
  isReady: boolean;
}

export default class App extends Component<{}, State> {
  state = {
    isReady: false,
  };

  async cacheResourcesAsync() {
    await Font.loadAsync({
      Rubik: require('./assets/fonts/Rubik/Rubik-Regular.ttf'),
      'Rubik-Bold': require('./assets/fonts/Rubik/Rubik-Bold.ttf'),
      'Rubik-Medium': require('./assets/fonts/Rubik/Rubik-Medium.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => {
            this.setState({ isReady: true });
            console.log('done');
          }}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/img.png')}
          style={{ width: 225, height: 175 }}
        />
        <View style={styles.text}>
          <Text style={styles.title}>Want our advice?</Text>
          <Text style={styles.description}>
            To give you best experience we would like to ask a few quick
            questions to set everything up for you.
          </Text>
        </View>
        <Button text="Let's do it" onPress={() => console.log('CLICK')} />
      </View>
    );
  }
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
