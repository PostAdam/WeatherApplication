import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MainPage from "../MainPage";
import FourDayForecast from "../FourDayForecast";
import { createDrawerNavigator } from "react-navigation";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppDrawerNavigator />;
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Today: MainPage,
    "4-day Forecast": FourDayForecast
  },
  {
    drawerBackgroundColor: "#333333",
    contentOptions: {
      labelStyle: {
        fontSize: 20
      },
      activeBackgroundColor: "#444444",
      inactiveBackgroundColor: "#222222",
      activeTintColor: "#d4d4d4",
      inactiveTintColor: "#121212"
    }
  }
);
