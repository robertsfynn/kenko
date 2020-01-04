import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { handleSetChange, addSet, removeSet } from '../store/actions/workout';
import SetInput from '../components/SetInput';
import Set from '../components/Set';

const Container = styled.View`
  background: #ffffff;
  border: 1px solid #dfdfe6;
  border-radius: 4px;
  margin: 20px 0;
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

const SetItem = ({
  title,
  image,
  sets,
  setType,
  exerciseID,
  handleSetChange,
  addSet,
  removeSet,
}) => (
  <Container>
    <HeaderContainer>
      <SetImage source={image} />
      <Title> {title} </Title>
    </HeaderContainer>
    {sets.map((set, setIndex) => {
      if (setType === 'Input')
        return (
          <SetInput
            key={setIndex}
            set={set}
            setIndex={setIndex}
            handleSetChange={handleSetChange}
            exerciseID={exerciseID}
          />
        );

      return <Set key={setIndex} set={set} setIndex={setIndex} />;
    })}
    {setType === 'Input' ? (
      <BottomContainer>
        <Button border onPress={() => removeSet(exerciseID)}>
          <ButtonText>Remove Set</ButtonText>
        </Button>
        <Button onPress={() => addSet(exerciseID)}>
          <ButtonText highlighted>Add Set</ButtonText>
        </Button>
      </BottomContainer>
    ) : null}
  </Container>
);

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetChange: (text, setIndex, name, exerciseID) => {
      return dispatch(handleSetChange(text, setIndex, name, exerciseID));
    },

    addSet: (exerciseID) => dispatch(addSet(exerciseID)),
    removeSet: (exerciseID) => dispatch(removeSet(exerciseID)),
  };
};

export default connect(null, mapDispatchToProps)(SetItem);
