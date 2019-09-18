import React, { Component } from 'react';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import Button from './components/Button';
import { AppLoading } from 'expo';
import styled from 'styled-components/native';

interface State {
  isReady: boolean;
}

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const StyledHeader = styled.Text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const StyledDescription = styled.Text`
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  padding: 0 40px;
`;

const StyledTextContainer = styled.View`
  margin-bottom: 150px;
`;

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
      <StyledContainer>
        <Image
          source={require('./assets/img.png')}
          style={{ width: 225, height: 175 }}
        />
        <StyledTextContainer>
          <StyledHeader>Want our advice?</StyledHeader>
          <StyledDescription>
            To give you best experience we would like to ask a few quick
            questions to set everything up for you.
          </StyledDescription>
        </StyledTextContainer>
        <Button text="Let's do it" onPress={() => console.log('CLICK')} />
      </StyledContainer>
    );
  }
}
