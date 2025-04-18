import { Text, View, StyleSheet } from "react-native";
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import UserScreen from "./components/UserScreen";

function App(){
  const Stack = createNativeStackNavigator()
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
            title: "Home Screen",
            headerStyle:{
              backgroundColor: "orange"
            },
            headerTintColor: '#fff'
            }
          }
         />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;