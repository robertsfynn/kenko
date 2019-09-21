import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  padding: 0 20px;
`;

const Title = styled.Text`
  font-family: Rubik-Medium;
  font-size: 30px;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: #ffffff;
`;

const Subtitle = styled.Text`
  font-family: Rubik;
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.7);
`;

const NextButton = styled.Text`
  font-family: Rubik;
  font-size: 15px;
  line-height: 18px;
  text-align: right;
  color: #5063ee;
  margin-bottom: 15px;
`;

interface Props {
  title: string;
  subtitle: string;
  handlePress: () => void;
}

const Header = ({ title, subtitle, handlePress }: Props) => {
  return (
    <LinearGradient
      colors={['#23253A', '#5063EE']}
      start={[0, 0]}
      end={[0, 2.5]}
      style={{ height: 180 }}
    >
      <SafeAreaView>
        <Container>
          <NextButton onPress={handlePress}> Next</NextButton>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Container>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
