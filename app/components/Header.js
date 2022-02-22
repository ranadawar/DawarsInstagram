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
        <View style={styles.unreadBadge}><Text style={styles.unreadBadgeText}>11</Text></View>
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
        
    },
    unreadBadge:{
      backgroundColor:'red',
      width:25,
      height:20,
      position:'absolute',
      borderRadius:25,
      left:20,
      bottom:13,
      zIndex:100,
      alignItems:'center',

    },
    unreadBadgeText:{
      color:colors.white,
      fontWeight:"bold",
      
    }

})