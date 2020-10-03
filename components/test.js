import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,StatusBar,Button} from 'react-native';
import firebase from 'firebase';
import Geolocation from '@react-native-community/geolocation'


export default class App extends Component {
    constructor(props)
    {
        super(props);
    this.state={
        tripName:this.props.route.params.name,
        email:firebase.auth().currentUser.email,
        
    }}
    writeUserData()
{
    Geolocation.getCurrentPosition(
        (position) => {
            firebase.database().ref('groups/' + this.state.tripName).set({
                email:this.state.email,
                latitude:position.coords.latitude,
                longitude:position.coords.longitude,
                Date:Date(),
               });  
               this.success(); 
        },
        (error) => alert(error.message),
        { 
           enableHighAccuracy: true, 
           //timeout: 20000, maximumAge: 1000 
        }
        
     );
}
success()
{
    alert("data entered successfully");
}
componentDidMount()
{
 this.writeUserData();
}
    


  render() {
    return (
      <View >
        <Text>
            hello this is a test page{this.state.name}
            </Text>
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