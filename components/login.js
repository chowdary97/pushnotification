import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';
// const  firebaseConfig= {
    

//   apiKey: "AIzaSyBz0XoSfM43fEz-t8mKIXnYSyfMqgGsf98",
//   authDomain: "pushnotification-b76a1.firebaseapp.com",
//   databaseURL: "https://pushnotification-b76a1.firebaseio.com",
//   projectId: "pushnotification-b76a1",
//   storageBucket: "pushnotification-b76a1.appspot.com",
//   messagingSenderId: "604779631884",
//   appId: "1:604779631884:web:9cd16cf116159f5ea8a529",
//   measurementId: "G-NZ15T1FF94"

// };

// firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
  
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
    this.state = { 
      email: '', 
      password: '',
      isLoading: false,
      
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        
        this.props.navigation.navigate('Dashboard');
        
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  userSignUp=()=>
  {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 
      <Text style={styles.header}>On Road</Text>
      <Text style={{fontSize:30,marginLeft:110}}>Login</Text>
       <Text style={{fontSize: 20}}>Email</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder="Enter Email"
          value={this.state.email}
          onChangeText={email=>this.setState({email})}
        />
        <Text style={{fontSize: 20}}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Password"
          value={this.state.password}
          onChangeText={password=>this.setState({password})}
          maxLength={15}
          secureTextEntry={true}
        />  
        <View style={styles.buttonStyels}> 
        <View styel={{flex:1}}>
          </View>
        <View style={{flex:1}}>
        <Button
          color="gray"
          title="Signin"
          onPress={() => this.userLogin()}
        />  
        </View>
        <View style={{flex:1}}>
         
        <Button
          color="gray"
          title="SignUp"
          onPress={() => this.userSignUp()}
        /> 
        </View>
</View>
                                 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyels:
  {//flex: 1,
    padding:10,
    flexDirection: 'row',
    
    justifyContent: 'center',

  },
header:{
  flex: 0.3,
  fontSize:40,
    display: "flex",
    marginLeft:30,
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
},
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});