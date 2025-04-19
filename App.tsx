import { Text, View, StyleSheet } from "react-native";
import 'react-native-reanimated';

import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import UserScreen from "./components/UserScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";


const StackNav = ()=>{
  const Stack = createNativeStackNavigator()
  return(
    <Stack.Navigator
      initialRouteName="Home" screenOptions={{
        headerStyle:{
          backgroundColor: "orange"
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home Screen",}}
         />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
  )
}

function App(){
  const Drawer = createDrawerNavigator();
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


export default App;