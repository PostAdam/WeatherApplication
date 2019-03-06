import WeatherSource from "../Services/WeatherSource";

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Forecast from "../Forecast";
import WeatherBackground from "../WeatherBackground";
import RegularText from "../RegularText";
import Toolbar from "../Toolbar";

import { loadData, saveData } from "../Services/ApplicationStorage";

const CITY_STORAGE_KEY = "@Weather:weather";

export default class MainPage extends Component {
  cityName = "";

  constructor(props) {
    super(props);
    this.state = { city: "", temp: "", forecast: null };
  }

  componentDidMount() {
    loadData(CITY_STORAGE_KEY).then(value => {
      if (value !== null) {
        this.setState({ city: value });
        this.searchForecast();
      }
    });
  }

  searchForecast = () => {
    saveData(CITY_STORAGE_KEY, this.state.city);
    WeatherSource.getWeatherForCity(this.state.city)
    .then(forecast => {
      console.log(forecast);
      if (forecast !== null) {
        this.cityName = this.state.city;
        this.setState({ forecast: forecast });
      }
    });
  };

  getTemperature = () => {
    return Math.floor(this.state.forecast.temp - 273.15);
  };

  getWeatherDescription = () => {
    return this.state.forecast.description;
  };

  setCity = city => {
    this.setState({ city: city });
  };

  render() {
    let forecastData = null;
    let cityName = null;
    let icon = "01d";

    if (this.state.forecast !== null) {
      forecastData = (
        <Forecast
          description={this.getWeatherDescription()}
          temp={this.getTemperature()}
          icon={this.state.forecast.icon}
          style={styles.forecast}
          multiplier={1}
        />
      );

      icon = this.state.forecast.icon;

      cityName = (
        <RegularText
          text={this.cityName}
          style={[styles.city, styles.shadowEffect]}
        />
      );
    }

    return (
      <WeatherBackground icon={icon}>
        <View style={[styles.mainView]}>
          <Toolbar
            openDrawer={this.props.navigation.openDrawer}
            setCity={this.setCity}
            searchForecast={this.searchForecast}
          />
          <View style={styles.content}>
            {cityName}
            {forecastData}
          </View>
        </View>
      </WeatherBackground>
    );
  }
}

const styles = StyleSheet.create({
  block: {},
  mainView: {
    flexDirection: "column",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  content: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  city: {
    flex: 1,
    justifyContent: "center"
  },
  forecast: {
    flex: 3,
    justifyContent: "flex-start"
  }
});
