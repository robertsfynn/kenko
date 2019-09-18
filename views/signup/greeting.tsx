import React from 'react';
import { Image } from 'react-native';
import Button from 'components/Button';
import styled from 'styled-components/native';
import placeholder from 'assets/img.png';

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

const Greeting = () => {
  return (
    <StyledContainer>
      <Image source={placeholder} style={{ width: 225, height: 175 }} />
      <StyledTextContainer>
        <StyledHeader>Want our advice?</StyledHeader>
        <StyledDescription>
          To give you best experience we would like to ask a few quick questions
          to set everything up for you.
        </StyledDescription>
      </StyledTextContainer>
      <Button text="Let's do it" onPress={() => console.log('CLICK')} />
    </StyledContainer>
  );
};

export default Greeting;
