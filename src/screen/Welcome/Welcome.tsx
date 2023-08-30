import React, {useState} from 'react';

import * as Styled from './styles';

import {MyBlur} from '../../components/MyBlur';

const Welcome = () => {
  const [activeButton, setActiveButton] = useState('register');
  return (
    <>
      <MyBlur />
      <Styled.StyledSafeView>
        <Styled.StyledScrollView>
          <Styled.ImageStyled
            source={{
              uri: 'https://i.pinimg.com/originals/56/b0/6e/56b06e432e33783e2bb7dd029b8984ed.png',
            }}
          />
          <Styled.Content>
            <Styled.Title>Discover your</Styled.Title>
            <Styled.Title>Dream job here</Styled.Title>
            <Styled.Body>
              Explore all the most exiting jobs roles based on your interest.
              And study major
            </Styled.Body>
            <Styled.ButtonContainer>
              <Styled.ButtonRegister
                isActive={activeButton === 'register'}
                onPress={() => setActiveButton('register')}>
                <Styled.TitleRegister>Register</Styled.TitleRegister>
              </Styled.ButtonRegister>
              <Styled.ButtonSignIn
                isActive={activeButton === 'signin'}
                onPress={() => setActiveButton('signin')}>
                <Styled.TitleSignIn>Sign In</Styled.TitleSignIn>
              </Styled.ButtonSignIn>
            </Styled.ButtonContainer>
          </Styled.Content>
        </Styled.StyledScrollView>
      </Styled.StyledSafeView>
    </>
  );
};

export default Welcome;
