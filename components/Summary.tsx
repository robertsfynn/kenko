import React from 'react';
import styled from 'styled-components/native';
import SetItem from '../containers/SetItem';
import { PurpleTags } from './Tags';

const Container = styled.View`
  padding: 0 20px;
`;

const SectionHeader = styled.Text`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 1px;
  color: #26262b;
  opacity: 0.7;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const Summary = ({ workout }) => {
  const getTags = (exercises) => {
    const tags = [];
    exercises.map((exercise) => {
      tags.push(...exercise.tags);
    });
    return [...new Set(tags)];
  };

  console.log(workout.chosenExercises);

  return (
    <Container>
      <SectionHeader>Muscles Involved</SectionHeader>
      <PurpleTags tags={getTags(workout.chosenExercises)} />
      <SectionHeader>Exercises</SectionHeader>
      {workout.chosenExercises.map((exercise) => (
        <SetItem
          title={exercise.title}
          key={exercise.id}
          exerciseID={exercise.id}
          image={exercise.image}
          sets={exercise.sets}
        />
      ))}
    </Container>
  );
};

export default Summary;
