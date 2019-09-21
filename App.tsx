import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import WorkoutCreator from './views/workout/WorkoutCreator';

interface State {
  isReady: boolean;
}

export default class App extends Component<{}, State> {
  state = {
    isReady: false,
  };

  async cacheResourcesAsync() {
    await Font.loadAsync({
      Rubik: require('assets/fonts/Rubik/Rubik-Regular.ttf'),
      'Rubik-Bold': require('assets/fonts/Rubik/Rubik-Bold.ttf'),
      'Rubik-Medium': require('assets/fonts/Rubik/Rubik-Medium.ttf'),
      Questrial: require('assets/fonts/Questrial/Questrial-Regular.ttf'),
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

    return <WorkoutCreator />;
  }
}
