import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import WorkoutCreator from './views/workout/WorkoutCreator';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './views/home/Home';
import WorkoutStarter from './views/workout/WorkoutStarter';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import { SafeAreaView } from 'react-native';

const store = createStore(rootReducer);

interface State {
  isReady: boolean;
}

const AppNavigator = createStackNavigator(
  {
    Home,
    WorkoutCreator,
    WorkoutStarter,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

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

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
