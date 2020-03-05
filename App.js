import React from 'react';
import {StyleSheet, Text, View, Picker} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Picker selectedValue={"Test"} style={{width: 100, height:100}}>
        <Picker.Item label="Test"/>
        <Picker.Item label="Test2"/>
        <Picker.Item label="Test3"/>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
