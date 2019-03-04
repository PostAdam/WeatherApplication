import React, { Component } from 'react';
import TouchableIcon from '../TouchableIcon';
import ForecastSource from '../ForecastSource';
import Forecast from '../Forecast';
import WeatherBackground from '../WeatherBackground';
import RegularText from '../RegularText';
import Storage from '../ApplicationStorage';
import { View, TextInput, StyleSheet } from 'react-native';

const FORECAST_STORAGE_KEY = '@Weather:forecast';

export default class MainPage extends Component {
    cityName = '';

    constructor(props) {
        super(props);
        this.state = { city: '', temp: "8", forecast: null };
    }

    componentDidMount() {
        let city = Storage.readData(FORECAST_STORAGE_KEY);
        console.log(city);
        if(city !== null) {
            this.setState({ city: city });
            this.searchForecast(null);
        }
    }

    searchForecast = event => {
        ForecastSource.getForecastForCity(this.state.city)
            .then(forecast => {
                console.log(forecast);
                this.cityName = this.state.city;
                this.setState({ forecast: forecast });
                Storage.saveData(FORECAST_STORAGE_KEY, this.state.city);
            });
    };

    _getTemperature = () => {
        return Math.floor(this.state.forecast.temp - 273.15);
    };

    _getWeatherDescription = () => {
        return this.state.forecast.description;
    };

    render() {
        let forecastData = null;
        let cityName = null;
        let icon = '01d';

        if (this.state.forecast !== null) {
            forecastData = (
                <Forecast
                    _getIconForWeather={this._getIconForWeather}
                    _getWeatherDescription={this._getWeatherDescription}
                    _getTemperature={this._getTemperature}
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