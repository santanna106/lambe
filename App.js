import React, { Component } from 'react';
import {View,Text} from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

let customFonts = {
  'Shelter': require('./assets/fonts/shelter.otf')
};


export default class App extends Component {

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }


  async componentDidMount() {
    await this._loadFontsAsync();
  }
  render () {
    const comments = [
      {
      nickname: 'Joana Elena Silva',
      comment: 'Muinto Ruim!'
      },
      {
      nickname: 'Rafael',
      comment: 'Excelente Foto!'
      }]
   
      
      return (
        <View style={{flex: 1}}>
          <Header/>  
          <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
        </View>
          
      )
   
  }
  
}
