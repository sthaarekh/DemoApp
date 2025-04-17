import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import Loading from './Loading'
import TextInputExample from './TextForm'
import SimpleList from './SimpleList'

const CustomComponent = () => {
  const [show, setShow] = useState("all") // loading, form, flatlist, all

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <View>
        <Text style={styles.textStyle}>Demo of Components</Text>
      </View>

      <View>
        <Button
          style={[styles.buttonStyle, { backgroundColor: 'red' }]}
          labelStyle={{ fontSize: 20, color: 'white' }}
          onPress={() => setShow("loading")}
        >Show Loading</Button>

        <Button
          style={[styles.buttonStyle, { backgroundColor: 'blue' }]}
          labelStyle={{ fontSize: 20, color: 'white' }}
          onPress={() => setShow("form")}
        >Show Form</Button>

        <Button
          style={[styles.buttonStyle, { backgroundColor: 'green' }]}
          labelStyle={{ fontSize: 20, color: 'white' }}
          onPress={() => setShow("flatlist")}
        >Show Flatlist</Button>

        <Button
          style={[styles.buttonStyle, { backgroundColor: 'black' }]}
          labelStyle={{ fontSize: 20, color: 'white' }}
          onPress={() => setShow("all")}
        >Show All</Button>
      </View>

      <View style={{ marginTop: 20 }}>
        {(show === "loading" || show === "all") && <Loading />}
        {(show === "form" || show === "all") && <TextInputExample />}
        {(show === "flatlist" || show === "all") && <SimpleList />}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  buttonStyle: {
    width: '100%',
    borderRadius: 3,
    marginBottom: 10,
  },
})

export default CustomComponent
