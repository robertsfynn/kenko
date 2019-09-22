import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background: #ffffff;
  border: 1px solid #dfdfe6;
  border-radius: 4px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #e9eaf2;
`;

const SetContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const SetImage = styled.Image`
  width: 53px;
  height: 53px;
  margin-right: 20px;
`;

const Title = styled.Text`
  font-family: Rubik-Medium;
  font-size: 18px;
  line-height: 22px;
  color: #23253a;
`;

const Button = styled.TouchableOpacity`
  border-right-width: ${(props) => (props.border ? '1px' : '0px')};
  border-right-color: #e9eaf2;
  flex: 1;
`;

const ButtonText = styled.Text`
  font-family: Rubik-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 20px;
  border-right-width: 1px;
  border-right-color: #e9eaf2;

  color: ${(props) => (props.highlighted ? '#5063EE' : '#26262b')};
`;

export default class SetItem extends Component {
  state = {
    sets: [{ reps: '8', kg: '60' }, { reps: '8', kg: '60' }],
  };

  handleChange = (text, index, name) => {
    const sets = [...this.state.sets];
    const set = sets[index];
    set[name] = text;

    this.setState({ sets: sets });
  };

  addSet = () => {
    this.setState((prevState) => ({
      sets: [...prevState.sets, { reps: '8', kg: '60' }],
    }));
  };

  removeSet = () => {
    const filteredSets = this.state.sets.slice(0, -1);
    this.setState({ sets: filteredSets });
  };

  render() {
    const { title, image } = this.props;
    console.log(this.state);
    return (
      <Container>
        <HeaderContainer>
          <SetImage source={image} />
          <Title> {title} </Title>
        </HeaderContainer>
        {this.state.sets.map((set, index) => (
          <SetContainer key={index}>
            <View style={{ flex: 1 }}>
              <Text>Set 1</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextInput
                keyboardType={'numeric'}
                value={set.reps}
                onChangeText={(text) => this.handleChange(text, index, 'reps')}
              />
              <Text>*</Text>
              <TextInput
                keyboardType={'numeric'}
                value={set.kg}
                onChangeText={(text) => this.handleChange(text, index, 'kg')}
              />
            </View>
          </SetContainer>
        ))}
        <BottomContainer>
          <Button border onPress={this.removeSet}>
            <ButtonText>Remove Set</ButtonText>
          </Button>
          <Button onPress={this.addSet}>
            <ButtonText highlighted>Add Set</ButtonText>
          </Button>
        </BottomContainer>
      </Container>
    );
  }
}
