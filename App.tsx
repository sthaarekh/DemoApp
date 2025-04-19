import { Text, View, StyleSheet } from "react-native";
import 'react-native-reanimated';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import UserScreen from "./components/UserScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useReducedMotion } from "react-native-reanimated";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const tabConfig=[
  {
    name:"Home",
    component: HomeScreen,
    focusedIcon: 'home',
    unFocusedIcon: 'home-outline',
    iconComponent: Ionicons
  },
  {
    name:"Profile",
    component: ProfileScreen,
    focusedIcon: 'settings',
    unFocusedIcon: 'settings-outline',
    iconComponent: Ionicons,
  },
  {
    name:"User",
    component: UserScreen,
    focusedIcon: 'user',
    unFocusedIcon: 'user-o',
    iconComponent: FontAwesome,
  }
]


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

const DrawerNav=()=>{
  const Drawer = createDrawerNavigator();
  return(
    <Drawer.Navigator screenOptions={{
        headerShown:false
      }
    }>
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  )
}

function App(){
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const routeConfig = tabConfig.find(config => config.name === route.name);
      const iconName = focused
        ? routeConfig.focusedIcon
        : routeConfig.unFocusedIcon;
      const IconComponent = routeConfig.iconComponent;
  
      return <IconComponent name={iconName} size={size} color={color} />;
    },
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle:{
            fontSize:14,
            paddingBottom:5,
            fontWeight: 600,
          },
          tabBarStyle:{
            height:60,
            paddingTop:0,
          }
  });
  
  const BottomTab = createBottomTabNavigator(); 
  return(
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={screenOptions}>
        {tabConfig.map(routeConfig=>(

      <BottomTab.Screen key={routeConfig.name} name={routeConfig.name} component={routeConfig.component} />
        ))}

      </BottomTab.Navigator>
      {/* <DrawerNav/> */}
    </NavigationContainer>
  )
}


export default App;