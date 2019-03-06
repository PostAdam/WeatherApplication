import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import TouchableIcon from "../TouchableIcon";

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setCity = city => {
    this.props.setCity(city);
  };

  openDrawer = () => {
    this.props.openDrawer();
  }

  render() {
    return (
      <View style={styles.topBar}>
        <TouchableIcon
          action={this.openDrawer}
          iconName={"bars"}
          style={styles.moreIcon}
        />

        <TextInput
          style={styles.cityInput}
          onChangeText={city => this.setCity(city)}
        />

        <TouchableIcon
          action={this.props.searchForecast}
          iconName={"search"}
          style={styles.searchIcon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 70,
    opacity: 0.5
  },
  cityInput: {
    backgroundColor: "#666",
    fontSize: 20,
    borderRadius: 45,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 4,
    alignItems: "flex-start"
  },
  moreIcon: {
    flex: 1,
    alignItems: "center"
  },
  searchIcon: {
    flex: 1,
    alignItems: "center"
  }
});
