import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Forecast from "../Forecast";
import ForecastSource from "../Services/ForecastSource";
import RegularText from "../RegularText";
import Toolbar from "../Toolbar";
import WeatherBackground from "../WeatherBackground";

import { loadData, saveData } from "../Services/ApplicationStorage";
import DayOfWeekMapper from "../Services/DayOfWeekMapper";

const CITY_STORAGE_KEY = "@Weather:weather";

export default class FourDayForecast extends Component {
  cityName = "";

  constructor(props) {
    super(props);
    this.state = { city: "", temp: "", forecast: [] };
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
    ForecastSource.getForecastForCity(this.state.city).then(forecast => {
      console.log(forecast);
      if (forecast !== null) {
        this.cityName = this.state.city;
        this.setState({ forecast: forecast });
      }
    });
  };

  getTemperature = temp => {
    return Math.floor(temp - 273.15);
  };

  getDayOfTheWeek = number => {};

  setCity = city => {
    this.setState({ city: city });
  };

  render() {
    let forecastDataUpper = null;
    let forecastDataLower = null;
    let cityName = null;
    let icon = '';

    if (this.state.forecast !== null && this.state.forecast.length > 0) {
      icon = this.state.forecast[1].icon;

      forecastDataUpper = (
        <View style={[styles.row]}>
          <View style={[styles.leftWeather]}>
            <Forecast
              temp={this.getTemperature(this.state.forecast[0].temp)}
              icon={this.state.forecast[0].icon}
              multiplier={0.5}
            />
            <Text style={[styles.date, styles.shadowEffect]}>
              {DayOfWeekMapper.getDayOfWeek(this.state.forecast[0].date)}
            </Text>
          </View>
          <View style={[styles.rightWeather]}>
            <Forecast
              temp={this.getTemperature(this.state.forecast[1].temp)}
              icon={this.state.forecast[1].icon}
              multiplier={0.5}
            />
            <Text style={[styles.date, styles.shadowEffect]}>
              {DayOfWeekMapper.getDayOfWeek(this.state.forecast[1].date)}
            </Text>
          </View>
        </View>
      );

      forecastDataLower = (
        <View style={[styles.row]}>
          <View style={[styles.leftWeather]}>
            <Forecast
              temp={this.getTemperature(this.state.forecast[2].temp)}
              icon={this.state.forecast[2].icon}
              multiplier={0.5}
            />
            <Text style={[styles.date, styles.shadowEffect]}>
              {DayOfWeekMapper.getDayOfWeek(this.state.forecast[2].date)}
            </Text>
          </View>

          <View style={[styles.rightWeather]}>
            <Forecast
              temp={this.getTemperature(this.state.forecast[3].temp)}
              icon={this.state.forecast[3].icon}
              multiplier={0.5}
            />
            <Text style={[styles.date, styles.shadowEffect]}>
              {DayOfWeekMapper.getDayOfWeek(this.state.forecast[3].date)}
            </Text>
          </View>
        </View>
      );

      cityName = (
        <RegularText
          text={this.cityName}
          style={[styles.city, styles.shadowEffect]}
        />
      );
    }

    return (
      <WeatherBackground icon={icon}>
        <View style={styles.mainView}>
          <Toolbar
            openDrawer={this.props.navigation.openDrawer}
            setCity={this.setCity}
            searchForecast={this.searchForecast}
          />
          <View style={styles.content}>
            {cityName}

            {forecastDataUpper}
            {forecastDataLower}

            <View style={{ flex: 1 }} />
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
  row: {
    flexDirection: "row",
    flex: 4
  },
  leftWeather: {
    flex: 1,
    justifyContent: "center"
  },
  rightWeather: {
    flex: 1,
    justifyContent: "center"
  },
  city: {
    flex: 1,
    justifyContent: "center"
  },
  date: {
    flexDirection: "column",
    fontSize: 20,
    textAlign: "center",
    color: "#fff"
  },
  shadowEffect: {
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10
  }
});
