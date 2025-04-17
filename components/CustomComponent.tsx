import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Loading from './Loading'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const CustomComponent = () => {
  return (
    <>
        <View>
            < Text style={styles.textStyle}>Demo of Components</Text>
        </View>

        <View>
            <Button style={[styles.buttonStyle, {backgroundColor:'red'}]} labelStyle={{fontSize:20, color:'white'}}> Show Loading</Button>
            <Button style={[styles.buttonStyle, {backgroundColor:'blue'}]} labelStyle={{fontSize:20, color:'white'}}> Show Form</Button>
            <Button style={[styles.buttonStyle, {backgroundColor:'green'}]} labelStyle={{fontSize:20, color:'white'}}> Show Flatlist</Button>
            <Button style={[styles.buttonStyle, {backgroundColor:'black'}]} labelStyle={{fontSize:20, color:'white'}}> Show All</Button>
        </View>

        <View>
            <Loading/>
        </View>
    </>
  )
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
    },
    buttonStyle:{
        width: '100%',
        borderRadius: 3,
        marginBottom: 10,
    }
})
export default CustomComponent