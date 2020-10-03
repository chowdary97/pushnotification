import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, Group } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Dashboard from './components/dashboard';
import SignUp from './components/signup';
import Login from './components/login'; 
import welcome from './components/Welcome'; 
import group from './components/group'; 


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function welcomescreeen({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={welcome}
          // options={{
          //   title: 'On Road', //Set Header Title
          //   headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          //   headerStyle: {
          //     backgroundColor: '#f4511e', //Set Header color
          //   },
          //   headerTintColor: '#ffff', //Set Header text color
          //   headerTitleStyle: {
          //     fontWeight: 'bold', //Set Header text style
          //   },
          // }}
        />
      </Stack.Navigator>
  );
}

function loginScreen({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   title: 'On Road', //Set Header Title
          //   headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          //   headerStyle: {
          //     backgroundColor: '#f4511e', //Set Header color
          //   },
          //   headerTintColor: '#ffff', //Set Header text color
          //   headerTitleStyle: {
          //     fontWeight: 'bold', //Set Header text style
          //   },
          // }}
        />
      </Stack.Navigator>
  );
}
function groupScreen({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="group"
          component={group}
          // options={{
          //   title: 'On Road', //Set Header Title
          //   headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          //   headerStyle: {
          //     backgroundColor: '#f4511e', //Set Header color
          //   },
          //   headerTintColor: '#ffff', //Set Header text color
          //   headerTitleStyle: {
          //     fontWeight: 'bold', //Set Header text style
          //   },
          // }}
        />
      </Stack.Navigator>
  );
}


function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
          
        }}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}/>
        
    </Stack.Navigator>
  );
}


function DashboardScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function SignUpScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'SignUp', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function LoginScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   title: 'Login', //Set Header Title
          //   headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          //   headerStyle: {
          //     backgroundColor: '#f4511e', //Set Header color
          //   },
          //   headerTintColor: '#fff', //Set Header text color
          //   headerTitleStyle: {
          //     fontWeight: 'bold', //Set Header text style
          //   },
          // }}
        />
      </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page Option' }}
          component={welcome} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page Option' }}
          component={secondScreenStack} />
          <Drawer.Screen
          name="Dashboard"
          options={{ drawerLabel: 'Dashboard' }}
          component={DashboardScreenStack} />
          <Drawer.Screen
          name="SignUp"
          options={{ drawerLabel: 'SignUp' }}
          component={SignUpScreenStack} />
          <Drawer.Screen
          name="Login"
          options={{ drawerLabel: 'Login' }}
          component={loginScreen} />
          <Drawer.Screen
          name="group"
          options={{ drawerLabel: 'Group' }}
          component={groupScreen} />
         
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;