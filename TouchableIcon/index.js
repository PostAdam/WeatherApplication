import React, { Component } from 'react';
import { View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TouchableIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.action} style={this.props.style}>
        <View>
          <Icon
            name={this.props.iconName}
            color="#333"
            size={40} />
        </View>
      </TouchableOpacity >
    );
  }
}