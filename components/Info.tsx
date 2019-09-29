import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const InfoContainer = styled.View`
  flex: 1;
  padding: 20px;
  border: 1px solid #dfdfe6;
  border-left-width: 0;
  border-right-width: ${({ noRightBorder }) => (noRightBorder ? 0 : '1px')};
`;

const InfoTitle = styled.Text`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 30px;
  color: #484856;
`;

const InfoSubtitle = styled.Text`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: rgba(38, 38, 43, 0.7);
  margin-right: 30%;
`;

const Info = ({ number, subtitle, unit }) => {
  return (
    <InfoContainer>
      <Text>
        <InfoTitle>{number} </InfoTitle>
        <InfoSubtitle>{unit}</InfoSubtitle>
      </Text>
      <InfoSubtitle>{subtitle}</InfoSubtitle>
    </InfoContainer>
  );
};

export default Info;
