import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.headingText}>User Screen</Text>
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
    textAlign: 'center',
  }
})

export default UserScreen