import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { USERS } from '../data/users'
import colors from '../config/colors'

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story,index)=>(
               <View style={styles.wholeContainer} key={index}>
                   <Image style={styles.image} source={story.image} />
                   <Text style={{color:colors.white}}>{
                   story.username.length>8?story.username.slice(0,8).toLowerCase()+"...":story.username
                   
                   }</Text>
               </View>
            ))}
      </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    image:{
        height:70,
        width:70,
        borderWidth:3,
        borderColor:"#ff8501",
        borderRadius:50
    },
    wholeContainer:{
        margin:3,
        padding:5,
        alignItems:"center",
        justifyContent:'center'

    }
})