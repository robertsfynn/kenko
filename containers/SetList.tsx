import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SetItem from './SetItem';

class SetList extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        {this.props.chosenExercises.map((exercise) => (
          <SetItem
            title={exercise.title}
            key={exercise.id}
            exerciseID={exercise.id}
            image={exercise.image}
            sets={exercise.sets}
            handleChange={this.props.handleChange}
            addSet={this.props.addSet}
            removeSet={this.props.removeSet}
          />
        ))}
      </View>
    );
  }
}

export default SetList;
