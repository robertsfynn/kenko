import React from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

interface Props {
  text: string;
  onPress: () => void;
}

const StyledButtonText = styled.Text`
  font-family: 'Rubik-Medium';
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 2px;
`;

const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center' }}>
      <LinearGradient
        colors={['#23253A', '#5063EE']}
        style={{ paddingHorizontal: 25, paddingVertical: 16 }}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        locations={[0.0, 0.79]}
      >
        <StyledButtonText>{text}</StyledButtonText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
