import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>CIFS Attendance</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#1167b1',
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 32,
    fontWeight: '200',
    textAlign: 'center',
    marginTop: 10
  }
});

