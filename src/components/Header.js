import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import { AppLoading } from 'expo';
import icon from '../../assets/imgs/icon.png'
import * as Font from 'expo-font';

let customFonts = {
    'Shelter': require('../../assets/fonts/shelter.otf')
  };

export default class Header extends Component {
    state = {
        fontsLoaded: false,
      };

      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
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
            return <AppLoading />;
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
        fontFamily: 'Shelter',
        fontSize: 28
    }
})