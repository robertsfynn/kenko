import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo';

const Title = styled.Text`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
`;

const horizontalMargin = 20;
const slideWidth = 220;

const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;

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
const Workout = ({ item }) => {
  return (
    <LinearGradient
      colors={['#23253A', '#5063EE']}
      style={styles.slide}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      locations={[0.0, 0.79]}
    >
      <View style={styles.slideInnerContainer}>
        <Title>{item.title}</Title>
      </View>
    </LinearGradient>
  );
};

export default Workout;
