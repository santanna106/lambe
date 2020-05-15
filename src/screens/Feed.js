import React, { Component } from 'react'
import {StyleSheet,FlatList,View} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'
import { AppLoading } from "expo";
import * as Font from 'expo-font';


  

export default class Feed extends Component {
    state = {
       
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Pereira filho',
            email:'rafaelprrfil@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments:[{
                nickname: 'John Ray Sheldon',
                comment: 'Stunning'
            },{
                nickname: 'Ana Julia Arruda',
                comment: 'Foto linda! Onde foi tirada?'
            }]
        },{
           
            id: Math.random(),
            nickname: 'Francisco Leandro Lima',
            email:'fllma@@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments:[{
                nickname: 'John Ray Sheldon',
                comment: []
            }]
            
        }]


    }

  
    render() {
 
            return (
                <View style={styles.container}>
                    <Header/>
                    <FlatList 
                        data={this.state.posts}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => 
                            <Post key={item.id} {...item} />} />
                </View>
            )
            
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF'
    }
})
