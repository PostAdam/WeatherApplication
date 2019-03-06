import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import WeatherIcon from "../Services/WeatherIconMapper";

let multiplier = 1;

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    multiplier = this.props.multiplier;
  }

  render() {
    return (
      <View style={[styles.weatherDetails, this.props.style]}>
        <View style={styles.weatherMainData}>
          <Ionicons
            style={[
              styles.weatherIcon,
              { fontSize: 140 * multiplier },
              { width: 140 * multiplier },
              { height: 140 * multiplier },
              styles.shadowEffect
            ]}
            name={WeatherIcon.getWeatherIcon(this.props.icon)}
            color="#212121"
            size={110}
          />
          <Text
            style={[
              styles.temperature,
              { fontSize: 90 * multiplier },
              styles.shadowEffect
            ]}
          >
            {this.props.temp}°C
          </Text>
        </View>
        <Text
          style={[
            styles.weatherDescription,
            styles.shadowEffect,
            { fontSize: 40 * multiplier }
          ]}
        >
          {this.props.description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherDetails: {
    flexDirection: "column",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  temperature: {
    color: "#fff"
  },
  weatherMainData: {
    flexDirection: "row"
  },
  weatherDescription: {
    flexDirection: "column",
    textAlign: "center",
    color: "#fff"
  },
  weatherIcon: {
    fontSize: 140,
    color: "#fff"
  },
  shadowEffect: {
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10
  }
});
