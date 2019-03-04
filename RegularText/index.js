import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RegularText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text style={[styles.text, styles.shadowEffect]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold'
  },
  shadowEffect: {
    textShadowColor: '#585858',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});
