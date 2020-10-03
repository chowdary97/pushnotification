import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,StatusBar,Button, ActivityIndicator} from 'react-native';
import firebase from 'firebase';



export default class App extends Component {
    constructor(props)
    {
        super(props);
    this.state={
        // name:firebase.auth().currentUser.displayName,
        
    }}
componentDidMount()
{
 setTimeout(()=>{this.props.navigation.navigate('Login')},5000);
}
    


  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        /> */}
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Text style={styles.welcome}>On Road</Text>
        <ActivityIndicator size="large" color="white" style={{margin:10}}/>
      </View> 
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});