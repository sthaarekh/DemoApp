import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const ProfileScreen = (props) => {
  return(
    <View style={style.viewStyle}>
      <Text style={style.headingText}>{props.route.params.name} Profile Screen</Text>
      <Button mode="contained" onPress={() => props.navigation.navigate('User')}>User</Button>
    </View>
  )
}

const style = StyleSheet.create({
    viewStyle: {
        display:'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        flex:1,
      },
      headingText:{
        fontSize:20,
        color:'black',
        textAlign: 'center',
        marginBottom: 20,
      }
})

export default ProfileScreen