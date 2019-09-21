import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  padding: 0 20px;
  padding-top: 20px;
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

interface Props {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <LinearGradient
      colors={['#23253A', '#5063EE']}
      start={[0, 0]}
      end={[0, 2.5]}
      style={{ height: 160 }}
    >
      <SafeAreaView>
        <Container>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Container>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
