import React, { useState, component } from "react";
import { Button, View, Text, SafeAreaView, TextInput } from 'react-native';

export default class app extends component
{ constructor(props)
    {
        super(props);
    this.state={

        userName:this.props.route.params.userName,
        password:' ',
        
    }}
move()
{
    this.props.navigation.navigate('login',{userName:this.state.userName,password:this.state.password});
}
    render(){
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 , padding: 16}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  marginBottom: 16
                }}>
                 On Road
              </Text>
              <label>Password</label>
              <TextInput placeholder="password" onChangeText={userName=>this.setState({password})} />
              <Button
                onPress={this.move}
                title="->"
              />
             
            </View>
            
          </View>
        </SafeAreaView>
      );
}
}
