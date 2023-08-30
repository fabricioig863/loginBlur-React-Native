import { Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window') 

interface Props {
    isActive: boolean;
}

export const StyledSafeView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: 'transparent';
    margin-bottom: 40px;
`;

export const StyledScrollView = styled.ScrollView.attrs(({ 
    contentContainerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 40
    }
}))``;

export const ImageStyled = styled.Image`
    width: 85%;
    height: ${(height / 3) * 1.4}px;
    border-radius: 16px;
`;

export const Content = styled.View`
    padding-horizontal: 30px;
    margin-top: 30px;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    text-align: center;
    color: #353147;
`;


export const Body = styled.Text`
    padding-top: 20px;
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    text-align: center;
    color: #353147;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-width: 2px;
    border-color: white;
    border-radius: 16px;
    background-color: #DFE3E430;
    margin-top: 40px;
`;

export const ButtonRegister = styled.TouchableOpacity<Props>`
    flex: 1;
    padding: 16px;
    border-radius: 6px;
    align-items: center;
    background-color: ${({ isActive }) => isActive ? '#DFE3E430': '#ffffff70'};
    transition: 100s;
`;

export const TitleRegister = styled.Text`
    font-weight: 500;
    color: #353147;
`;

export const ButtonSignIn = styled.TouchableOpacity<Props>`
    flex: 1;
    padding: 16px;
    align-items: center;
    background-color: ${({ isActive }) => isActive ? '#DFE3E430': '#ffffff70'};
    transition: 100s;
`;

export const TitleSignIn = styled.Text`
    font-weight: 500;
    color: #353147;
`;