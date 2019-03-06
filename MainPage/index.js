import React, { Component } from 'react';
import TouchableIcon from '../TouchableIcon';
import ForecastSource from '../ForecastSource';
import Forecast from '../Forecast';
import WeatherBackground from '../WeatherBackground';
import RegularText from '../RegularText';
import {loadData, saveData} from '../ApplicationStorage';
import { View, TextInput, StyleSheet, AsyncStorage } from 'react-native';

const FORECAST_STORAGE_KEY = '@Weather:weather';

export default class MainPage extends Component {
    cityName = '';

    constructor(props) {
        super(props);
        this.state = { city: '', temp: '', forecast: null };
    }

    componentDidMount() {
        loadData(FORECAST_STORAGE_KEY)
            .then(value => {
                if (value !== null) {
                    this.setState({ city: value });
                    this.searchForecast();
                }
            });
    }

    searchForecast = () => {
        saveData(FORECAST_STORAGE_KEY, this.state.city);
        ForecastSource.getForecastForCity(this.state.city)
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

    render() {
        let forecastData = null;
        let cityName = null;
        let icon = '01d';

        if (this.state.forecast !== null) {
            forecastData = (
                <Forecast
                    getWeatherDescription={this.getWeatherDescription}
                    getTemperature={this.getTemperature}
                    icon={this.state.forecast.icon}
                    style={styles.forecast}
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
                    <View style={styles.topBar}>
                        <TextInput
                            style={styles.cityInput}
                            onChangeText={(city) => this.setState({ city })}>
                        </TextInput>

                        <TouchableIcon
                            searchForecast={this.searchForecast}
                            iconName={"search"}
                            style={styles.searchIcon} />

                        <TouchableIcon
                            searchForecast={this.componentDidMount}
                            iconName={"ellipsis-v"}
                            style={styles.moreIcon} />
                    </View>
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
    block: {

    },
    mainView: {
        flexDirection: 'column',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    topBar: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 70,
        opacity: 0.5
    },
    cityInput: {
        backgroundColor: '#666',
        fontSize: 20,
        borderRadius: 45,
        marginLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 4,
        alignItems: 'flex-start'
    },
    moreIcon: {
        flex: 1,
        alignItems: 'center'
    },
    searchIcon: {
        flex: 1,
        alignItems: 'center'
    },
    content: {
        height: '100%',
        // flex: 6,
        flexDirection: 'column',
        alignItems: 'center',
    },
    city: {
        flex: 1,
        justifyContent: 'center'
    },
    forecast: {
        flex: 3,
        justifyContent: 'flex-start'
    },
    border: {
        borderWidth: 2,
        borderColor: '#000',
    }
});