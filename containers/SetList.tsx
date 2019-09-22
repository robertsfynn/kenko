import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SetItem from './SetItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SetList extends Component {
  render() {
    return (
      <View>
        {this.props.chosenExercises.map((exercise) => (
          <SetItem
            title={exercise.title}
            key={exercise.id}
            image={exercise.image}
          />
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { workout } = state;
  return {
    chosenExercises: workout.chosenExercises,
  };
};

export default connect(mapStateToProps)(SetList);
