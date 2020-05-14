import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,ActivityIndicator
} from 'react-native'

import icon from '../../assets/imgs/icon.png'
import * as Font from 'expo-font';


export default class Header extends Component {
    constructor(props){
        super(props)
        
        
    }

    state = {
        fontsLoaded: false,
      };
    

    async componentDidMount () {
       await Font.loadAsync({
           'DancingScript-Bold': require('../../assets/fonts/DancingScript-Bold.ttf')
       });
       this.setState({ fontsLoaded: true });

    }
    

    render() {
        if (this.state.fontsLoaded) {
            return (
            
                <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Image source={icon} style={styles.image} />
                        <Text style={styles.tilte}>Lambe Lambe</Text>
                    </View>
                </View>
            
            )
        } else {
            return <ActivityIndicator size="large" />;
        }
           
        
       
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20 : 15,
        padding: 10,
        borderBottomWidth:1,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    tilte: {
        color: '#000',
        fontFamily: 'DancingScript-Bold',
        fontSize: 28
    }
})