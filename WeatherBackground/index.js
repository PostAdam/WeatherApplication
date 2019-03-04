import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let photoPath = photoMap[this.props.icon];

        return (
            <ImageBackground   
                source={photoPath}
                resizeMode="cover"
                style={styles.background}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

const path = '../WeatherImages/';

const photoMap = {
    '01d': require(path + 'sunny.jpg'),
    '01n': require(path + 'night.png'),
    '02d': require(path + 'cloudy.png'),
    '02n': require(path + 'cloudy.png'),
    '03d': require(path + 'cloudy.png'),
    '03n': require(path + 'cloudy.png'),
    '04d': require(path + 'cloudy.png'),
    '04n': require(path + 'cloudy.png'),
    '09d': require(path + 'rainy.jpg'),
    '09n': require(path + 'rainy.jpg'),
    '10d': require(path + 'rainy.jpg'),
    '10n': require(path + 'rainy.jpg'),
    '11d': require(path + 'lightning.jpg'),
    '11n': require(path + 'lightning.jpg'),
    '13d': require(path + 'snow.jpg'),
    '13n': require(path + 'snow.jpg'),
    '50d': require(path + 'foggy.jpg'),
    '50n': require(path + 'foggy.jpg')
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        width: undefined,
        height: undefined
    }
});