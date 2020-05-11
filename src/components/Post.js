import React, { Component } from 'react'
import {StyleSheet,View,Image,Dimensions} from 'react-native'
import Autor from './Autor'

export default class Post extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Image source={this.props.image} style={styles.image} />
                <Autor email='fulandodetal@gmail.com' nickname='fulano' />
            </View>
                
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain'
    }
})