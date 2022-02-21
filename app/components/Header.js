import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const Header = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity> 
       <Image style={styles.image} source={require('../assets/insta.png')} />
       </TouchableOpacity>
      <View style={styles.iconContainer}>
      <TouchableOpacity>
        <Octicons style={{marginHorizontal:9}} name="diff-added" size={22} color={colors.white} />
        </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons style={{marginHorizontal:9}} name="heart-outline" size={22} color={colors.white} />
        </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons style={{marginHorizontal:9}} name="facebook-messenger" size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        backgroundColor:colors.dark,
        padding:5,
        alignItems:'center'

    },
    image:{
        height:50,
        width:100,
        resizeMode:'contain'
    },
    iconContainer:{
        position:'absolute',
        right:10,
        flexDirection:'row'
        
    }
})