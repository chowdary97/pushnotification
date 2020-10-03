import {
    StyleSheet,
    Dimensions
  } from 'react-native';
  
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    titleMessage: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    time: {
      margin: 10,
    },
    picker: {
      width: 100,
    },
    wrapStyle: {
      alignSelf: 'flex-end',
      padding: 10,
    },
    modalContainer: {
      position: 'absolute',
      backgroundColor: '#000000af',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    crossIcon: {
      position: 'absolute',
      top: 0,
      right: 3,
      zIndex: 99,
    },
    modalSubContainer: {
      justifyContent: 'center',
      height: deviceHeight / 4.4,
      width: deviceWidth - 50,
      backgroundColor: "#fff",
    },
  });
  module.exports = styles;