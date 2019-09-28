import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../../components/Button';

export class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              padding: 15,
              borderColor: '#DFDFE6',
              borderWidth: 1,
            }}
          >
            <Text>0</Text>
            <Text>workouts completed</Text>
          </View>
          <View style={{ flex: 1, padding: 15 }}>
            <Text>0</Text>
            <Text>workouts completed</Text>
          </View>
          <View style={{ flex: 1, padding: 15 }}>
            <Text>0</Text>
            <Text>workouts completed</Text>
          </View>
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
