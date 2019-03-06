import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WeatherIcon from '../WeatherIconMapper';

export default class Forecast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.weatherDetails, styles.border, this.props.style]}>
                <View style={styles.weatherMainData}>
                    <Ionicons
                        style={[styles.weatherIcon, styles.shadowEffect]}
                        name={WeatherIcon.getWeatherIcon(this.props.icon)}
                        color="#212121"
                        size={110} />
                    <Text style={[styles.temperature, styles.shadowEffect]}>
                        {this.props.getTemperature()}°C
                        </Text>
                </View>
                <Text style={[styles.weatherDescription, styles.shadowEffect]}>
                    {this.props.getWeatherDescription()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherDetails: {
        flexDirection: "column",
        alignItems: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    temperature: {
        fontSize: 90,
        color: '#fff',
    },
    weatherMainData: {
        flexDirection: "row",
    },
    weatherDescription: {
        flexDirection: "column",
        fontSize: 40,
        textAlign: 'center',
        color: '#fff'
    },
    weatherIcon: {
        width: 140,
        height: 140,
        color: '#fff'
    },
    shadowEffect: {
        textShadowColor: '#585858',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    }
});