import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TouchableIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.searchForecast} style={this.props.style}>
        <View>
          <Icon
            name={this.props.iconName}
            color="#333"
            size={40} />
        </View>
      </TouchableHighlight>
    );
  }
}