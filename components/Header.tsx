import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { handleTitleChange } from '../store/actions/workout';
import back from '../assets/back-icon.png';
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
  background: ;
`;

const InputLabel = styled.Text`
  font-family: Questrial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: rgba(254, 254, 254, 0.6);
  margin-bottom: 6px;
`;

const Input = styled.TextInput`
  font-family: Rubik;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  padding-bottom: 15px;
  border-bottom-color: #5063ee;
  border-bottom-width: 1px;
`;

interface Props {
  title: string;
  subtitle: string;
  handleNext: () => void;
  handleBack: () => void;
  nextActive: boolean;
  workout?: object;
  nextText: string;
  handleTitleChange: () => void;
}

const Header = ({
  title,
  subtitle,
  handleNext,
  handleBack,
  nextActive,
  nextText,
  workout,
  handleTitleChange,
}: Props) => (
  <LinearGradient
    colors={['#23253A', '#5063EE']}
    start={[0, 0]}
    end={[0, 2.5]}
    style={{ paddingBottom: 30 }}
  >
    <SafeAreaView>
      <Container>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          {handleBack ? (
            <TouchableOpacity onPress={handleBack}>
              <Image source={back} style={{ width: 22, height: 22 }} />
            </TouchableOpacity>
          ) : null}
          {handleNext ? (
            <NextButton onPress={handleNext}>
              {nextActive ? nextText : ' '}
            </NextButton>
          ) : null}
        </View>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {workout ? (
          <>
            <InputLabel>Workout name</InputLabel>
            <Input
              value={workout.title}
              onChangeText={(text) => handleTitleChange(text)}
            />
          </>
        ) : null}
      </Container>
    </SafeAreaView>
  </LinearGradient>
);

const mapDispatchToProps = (dispatch) => ({
  handleTitleChange: (text) => dispatch(handleTitleChange(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Header);
