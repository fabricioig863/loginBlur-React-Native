import React from 'react';

import * as Styled from './styles';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

export default function Signin({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) {
  return (
    <Styled.Container>
      <Styled.Title>Signin</Styled.Title>
      <Styled.ButtonSignin onPress={() => navigation.goBack()}>
        <Styled.Title>Go back</Styled.Title>
      </Styled.ButtonSignin>
    </Styled.Container>
  );
}
