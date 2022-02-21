import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Constants from 'expo-constants';

const Screen = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.view}>
            {children}
        </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight
    },
    view:{
        flex:1
    }
})