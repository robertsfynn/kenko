import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.View`
  padding: 0 20px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
