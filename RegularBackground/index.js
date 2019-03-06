import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default class RegularBackground extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground
                source={require(this.props.path)}
                resizeMode="cover"
                style={styles.background}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "column",
        width: undefined,
        height: undefined
    }
});