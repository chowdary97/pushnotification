import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';


export default class Trip extends Component {
  
  constructor() {
    super();
    this.state = { 
     // tripName:this.props.navigation.getParam('tripName'),
     name:this.props.navigation.getParam('tripName',"sample"),
    // name:this.props.navigation.state.params.tripName,
    // tripName:this.props.route.params.tripName,

    }
  }

 name()
 {
     alert(this.state.name);
 }

  journey()
  {
    //var trip=this.state.tripName;
    alert(trip);
      alert("have a pleasent and safe !");
   // this.props.navigation.navigate('journey') ; 
  }

  render() {
      
    return (
      
      <View style={{flex:1,justifyContent:'center',width:250,alignSelf: 'center'}}>
          <Text>
              Enter Trip Name:{this.state.tripName}
              </Text>
              <TextInput placeholder="Trip Name" style={{borderBottomColor:"gray",
              borderBottomWidth:1,padding:30, borderBottomColor:'gray',
               }}value={this.state.tripName} onChange={tripName=>this.setState({tripName}) } //value={ this.state.tripName}
               //onChangeText={(val) => this.setState(val, 'tripName')}
              //  onChangeText={tripName=>{this.setState({tripName});}} 
              />
               {/* <Button title="Trip Name" onPress={()=>this.name()}/> */}
               <Button title="Journey" onPress={()=>this.journey()}/>
          </View>
    );
  }
}