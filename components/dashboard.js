import React, { useState, Component } from "react";
import {View,Text,Button} from 'react-native';
import firebase from 'firebase';
import firebaseConfig from '../database/firebase';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { BorderlessButton } from "react-native-gesture-handler";

export default class app extends Component{
    constructor(props) 
    { 
        super(props); 
        this.state = { 
        lat:0,
        lon:0,
        
        email:firebase.auth().currentUser.email,
        userId:firebase.auth().currentUser.uid,
        time : Date(),
    }; 
    } 
writeUserData()
{
    Geolocation.getCurrentPosition(
        (position) => {
            firebase.database().ref('users/' + this.state.userId).set({
                email:this.state.email,
                latitude:position.coords.latitude,
                longitude:position.coords.longitude,
                Date:Date(),
               });   
        },
        (error) => alert(error.message),
        { 
           enableHighAccuracy: true, 
           timeout: 5000, 
           maximumAge: 360000
        }
        
     );
}
getUserData()
{
    let ref = firebase.database().ref('users/').child(this.state.userId);
    ref.on('value', snapshot => {
      const state = snapshot.val();
     this.setState({
         lat:snapshot.val().latitude,
         lon:snapshot.val().longitude,
     });
   
    });
}

    componentDidMount()
    {
        setInterval(() => {
            
            this.writeUserData() }, 1000);
   
     this.getUserData();
      
       
}
componentWillUnmount() {
  clearInterval(this.interval);
  }
    
    render()
    {
       
        return(
    <View style={{flex:1}}>
        {/* <View style={{flex:0.2}}></View> */}
        <View style={{flex:1}}>
            <MapView 
            style={{flex:1}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation initialRegion={{
             latitude:this.state.lat,
             longitude:this.state.lon,
              latitudeDelta: 0.0019,
              longitudeDelta:0.0012
      }}
             >
                 <Marker coordinate={{ latitude: this.state.lat, longitude:this.state.lon }} />
                 </MapView>  
                 </View>
                 {/* <View style={{flex:0.2,alignContent:'center',alignItems:'center',justifyContent:'center'}}>
                     <Button  title="create group" onPress={()=>this.props.navigation.navigate('Group')}></Button>
                 </View> */}
                 </View>
        );
       
    }
}