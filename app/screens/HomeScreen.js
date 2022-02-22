import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import Header from '../components/Header';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Stories from '../components/Stories';


const HomeScreen = () => {
  return (
    <Screen style={styles.screen}>
        <Header />
        <Stories />
        
    </Screen>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:colors.black
  }
})