/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native'

export default class RNProject extends Component {
  constructor (props) {
    super(props)
    this.state = { text: 'Useless Placeholder' }
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={styles.welcome}>
          Welcome to Hello world123!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('RNProject', () => RNProject)
