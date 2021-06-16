import React from 'react';
import styled from 'styled-components/native';

const Card = ({item}) => (
  <Container>
    <Photo source={{uri: item.photo}} resizeMode="contain" />
    <TextContainer>
      <Text>{item.name}</Text>
    </TextContainer>
  </Container>
);

export default Card;

const Container = styled.View`
  height: 450px;
  justify-content: center;
  align-items: center;
  background: #02aafe;
  border-radius: 15px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
  shadow-color: #2a2b2c;
  shadow-offset: 0px 2px;
  elevation: 2;
  margin-top: 100px;
`;
const Photo = styled.Image`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  flex: 2;
  margin-top: 10%;
`;
const TextContainer = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
  flex: 1;
  margin-top: 10%;
`;
const Text = styled.Text`
  text-align: center;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;
