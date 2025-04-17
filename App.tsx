import { Text, View, Button, StyleSheet } from "react-native";
import styles from "./styles"

function App(){
  return(
    <>
    <View>

    <Text style ={styles.textStyle}>Hello Buddy</Text>
    <Button title ="Hello" color="green"></Button>

    </View>
    </>
  )
}


export default App;