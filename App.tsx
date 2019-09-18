import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Greeting from './views/signup/greeting';

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
          }}
          onError={console.warn}
        />
      );
    }

    return <Greeting />;
  }
}
