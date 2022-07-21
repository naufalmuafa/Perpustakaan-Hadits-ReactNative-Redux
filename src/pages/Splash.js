import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {StackActions} from '@react-navigation/native';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Login'));
            // this.props.navigation.navigate('Products');
        }, 3000);
    }
    render() {
        return (
            <ImageBackground source={require('../assets/splash/2.png')} style={styles.imageBg}>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imageBg: {
        flex: 1,
    },
})

export default Splash;

