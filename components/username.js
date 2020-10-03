import React, { useState, component } from "react";
import { Button, View, Text, SafeAreaView, TextInput } from 'react-native';

export default class app extends component
{ constructor(props)
    {
        super(props);
    this.state={
        userName:' ',
        
    }}
move()
{
    this.props.navigation.navigate('password',{userName:this.state.userName});
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
              <label>Username</label>
              <TextInput placeholder="UserName" onChangeText={userName=>this.setState({userName})} />
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
