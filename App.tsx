import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {SignIn} from './src/screen/SignIn/Signin';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return <SignIn />;
};

export default App;
