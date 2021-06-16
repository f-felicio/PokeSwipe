import React, {useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import styled from 'styled-components/native';

const opacity = new Animated.Value(0);

export default function OverlayLabel() {
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0.95,
      duration: 200,
      easing: Easing.out(Easing.quad),
      delay: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        delay: 200,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);
  return (
    <AnimatedContainer style={{opacity}}>
      <Text>Why?? 😢</Text>
    </AnimatedContainer>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #e74645;
  position: absolute;
  z-index: 1;
`;
const Text = styled.Text`
  text-align: center;
  font-size: 25px;
  color: #fff;
  font-weight: bold;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
