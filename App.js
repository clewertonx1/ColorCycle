import * as React from 'react';
import {useState, useEffect, useRef } from 'react'
import { Platform, StyleSheet, Text, View, Animated } from 'react-native';
import { render } from 'react-dom';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {

  

  const animatedValue = new Animated.Value(0)
  const animatedValueRef = useRef(animatedValue)

  const translateX = animatedValueRef.current.interpolate({
    inputRange: [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    outputRange: ["#f4e749", "#60bbf4", "aqua", "#7d42dd", "#e5903a", "#a58828", "#bc3bbc", "#164a16", "#d94646", "#b96c52", "#bcef32"],
  })
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 100,
        duration: 11000,  
      }),
      Animated.delay(1000),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 11000,  
      }),
  
    ])
  ).start()

 
  return (
    <Animated.View style={[styles.container, {backgroundColor: translateX}]}>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});