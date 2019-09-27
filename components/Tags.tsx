import React from 'react';
import styled from 'styled-components/native';

interface Props {
  tags: string[];
}

const TagContainer = styled.View`
  background: rgba(255, 255, 255, 0.0001);
  border: 1px solid #dfdfe6;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const TagText = styled.Text`
  font-family: Questrial;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  padding: 5px 8px;
  color: #23253a;
  opacity: 0.7;
`;

const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: flex-start;
  width: 75%;
`;

export const Tags = ({ tags }: Props) => {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <TagContainer key={tag}>
          <TagText>{tag}</TagText>
        </TagContainer>
      ))}
    </TagsContainer>
  );
};

const PurpleTagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-self: flex-start;
`;

export const PurpleTagContainer = styled.View`
  background: #7081ff;
  border-radius: 2px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const PurpleTagText = styled.Text`
  font-family: Rubik;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  padding: 10px 20px;
  color: #ffffff;
`;

export const PurpleTags = ({ tags }: Props) => {
  return (
    <PurpleTagsContainer>
      {tags.map((tag) => (
        <PurpleTagContainer key={tag}>
          <PurpleTagText>{tag}</PurpleTagText>
        </PurpleTagContainer>
      ))}
    </PurpleTagsContainer>
  );
};
