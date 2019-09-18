import React from 'react';
import styled from 'styled-components/native';

interface Props {
  tag: string;
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

const Tag = ({ tag }: Props) => {
  return (
    <TagContainer>
      <TagText>{tag}</TagText>
    </TagContainer>
  );
};

export default Tag;
