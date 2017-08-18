import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, flexDirection: 'column', padding: 15 }}>

          <View style={[styles.title,{flex: 0.3 }]}>
            <Text>Math Challenge</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Text style={styles.paragraph}>
              Choose one of the challenges!
            </Text>
          </View>

          <View style={[styles.section,{flex: 0.1}]}>+ Addition</View>
          <View style={[styles.section,{flex: 0.1}]}>- Substraction</View>
          <View style={[styles.section,{flex: 0.1}]}>x Multiplication</View>
          <View style={[styles.section,{flex: 0.1}]}>: Division</View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
  },
  section: {
    padding: 10,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#CCC',
  },
  paragraph: {
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
