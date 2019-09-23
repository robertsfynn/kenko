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

interface State {}

class SetItem extends Component {
  render() {
    const {
      title,
      image,
      sets,
      exerciseID,
      handleChange,
      addSet,
      removeSet,
    } = this.props;
    return (
      <Container>
        <HeaderContainer>
          <SetImage source={image} />
          <Title> {title} </Title>
        </HeaderContainer>
        {sets.map((set, index) => (
          <SetContainer key={index}>
            <View style={{ flex: 1 }}>
              <Text>Set 1</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextInput
                keyboardType="numeric"
                value={set.reps}
                onChangeText={(text) =>
                  handleChange(text, index, 'reps', exerciseID)
                }
              />
              <Text>*</Text>
              <TextInput
                keyboardType="numeric"
                value={set.kg}
                onChangeText={(text) =>
                  handleChange(text, index, 'kg', exerciseID)
                }
              />
            </View>
          </SetContainer>
        ))}
        <BottomContainer>
          <Button border onPress={() => removeSet(exerciseID)}>
            <ButtonText>Remove Set</ButtonText>
          </Button>
          <Button onPress={() => addSet(exerciseID)}>
            <ButtonText highlighted>Add Set</ButtonText>
          </Button>
        </BottomContainer>
      </Container>
    );
  }
}

export default SetItem;
