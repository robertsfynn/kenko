import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
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
  color: #5063ee;
  margin-bottom: 15px;
  text-align: right;
  margin-left: auto;
`;

const BackButton = styled.Text`
  font-family: Rubik;
  font-size: 15px;
  line-height: 18px;
  color: #5063ee;
  margin-bottom: 15px;
`;

interface Props {
  title: string;
  subtitle: string;
  handleNext: () => void;
  handleBack: () => void;
  nextActive: boolean;
}

const Header = ({
  title,
  subtitle,
  handleNext,
  handleBack,
  nextActive,
}: Props) => (
  <View style={{ backgroundColor: '#2f325a', height: 180 }}>
    <SafeAreaView>
      <Container>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          {handleBack ? (
            <BackButton onPress={handleBack}>Back</BackButton>
          ) : null}
          {handleNext ? (
            <NextButton onPress={handleNext}>
              {nextActive ? 'Next' : ' '}
            </NextButton>
          ) : null}
        </View>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    </SafeAreaView>
  </View>
);

{
  /* <LinearGradient
    colors={['#23253A', '#5063EE']}
    start={[0, 0]}
    end={[0, 2.5]}
    style={{ height: 180 }}
  ></LinearGradient> */
}

export default Header;
