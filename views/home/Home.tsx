import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  AsyncStorage,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import Button from '../../components/Button';
import Info from '../../components/Info';
import noWorkoutsImage from '../../assets/no-workouts.png';
import Container from '../../styled/Container';

const Title = styled.Text`
  font-family: Rubik-Medium;
  font-size: 30px;
  line-height: 41px;
  margin-bottom: 20px;
  margin-top: 55px;
  color: #26262b;
`;

const InfosContainer = styled.View`
  flex-direction: row;
`;

const NoWorkoutsText = styled.Text`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  padding: 0 30px;

  color: rgba(38, 38, 43, 0.7);
`;

const horizontalMargin = 20;
const slideWidth = 220;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;
console.log(sliderWidth);

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
    height: itemHeight,
    padding: horizontalMargin,
    // other styles for the item container
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1,
    // other styles for the inner container
  },
});

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: null,
    };
    this.carousel = {};
  }

  componentDidMount() {
    this.getWorkouts();
  }

  getWorkouts = async () => {
    const workouts = JSON.parse(await AsyncStorage.getItem('workouts'));
    this.setState({ workouts });
  };

  renderItem({ item }) {
    return (
      <LinearGradient
        colors={['#23253A', '#5063EE']}
        style={styles.slide}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        locations={[0.0, 0.79]}
      >
        <View style={styles.slideInnerContainer}>
          <Text>{item.title}</Text>
        </View>
      </LinearGradient>
    );
  }

  render() {
    console.log(this.state);
    return (
      <SafeAreaView>
        <Container>
          <Title>Dashboard</Title>
        </Container>
        <InfosContainer>
          <Info number={0} subtitle="workouts completed" />
          <Info number={0} subtitle="tonnage lifted" unit="kg" />
          <Info number={70} subtitle="current weight" unit="kg" />
        </InfosContainer>
        <View style={{ marginVertical: 20 }}>
          {this.state.workouts ? (
            <Carousel
              layout="stack"
              layoutCardOffset={9}
              ref={(c) => {
                this.carousel = c;
              }}
              data={this.state.workouts}
              renderItem={this.renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
          ) : (
            <Container>
              <Image
                source={noWorkoutsImage}
                style={{
                  height: undefined,
                  width: '90%',
                  alignSelf: 'center',
                  aspectRatio: 332 / 280,
                  marginBottom: 50,
                  marginTop: 30,
                }}
              />
              <NoWorkoutsText>
                You have no workouts yet. Go on and create your first one!
              </NoWorkoutsText>
            </Container>
          )}
        </View>
        <Button
          text="Create Workout"
          onPress={() => this.props.navigation.navigate('WorkoutCreator')}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
