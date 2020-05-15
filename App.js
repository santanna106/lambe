import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View,Text} from 'react-native'
import Header from './src/components/Header'
import Post from './src/components/Post'
import Feed from './src/screens/Feed'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const icons = {
  Feed: {
      name: 'home'
  },
  Add: {
    name: 'camera'
  },
  Profile: {
    name: 'user'
  },
 
}


export default class App extends Component {

  render () { 
      return (

        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color,size}) => {
              const {name} = icons[route.name]
              return <Icon name={name} color={color} size={size} />
            }
          })}
          tabBarOptions={{
            style: {
              backgroundColor: '#121212'
            },
            activeTintColor: '#FFF',
          }}
        >
  
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Add" component={Feed} />
          <Tab.Screen name="Profile" component={Feed} />
          
        </Tab.Navigator>
      </NavigationContainer>
        
      )
   
  }
  
}
