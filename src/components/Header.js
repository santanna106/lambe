import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/icon.png'






export default class Header extends Component {
    
    render() {
       
            return (
            
                    <View style={styles.container}>
                        <View style={styles.rowContainer}>
                            <Image source={icon} style={styles.image} />
                            <Text style={styles.tilte}>Lambe Lambe</Text>
                        </View>
                    </View>
                
            )
       
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
        fontFamily: 'Shelter',
        fontSize: 28
    }
})