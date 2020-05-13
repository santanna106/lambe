import React, { Component } from 'react'
import {View,
        Text,
        StyleSheet,
        TextInput,
    TouchableWithoutFeedback as TWF,
Alert} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'


export default class AddComment extends Component {
    state = {
        comment: '',
        editMode:false,
        askComment: true
    }

    

    handleAddComment = () => {
        Alert.alert('Adicionado!',this.stage.comment)
    }
s
    render() {
        let comentArea = null

        if( this.state.editMode){
            commentArea = (
                <View style={StyleSheet.container}>
                    <TextInput placeholder="Pode comentar ..."
                                style={styles.input}
                                autoFocus={true}
                                value={this.state.comment}
                                onChangeText={comment => this.setState({comment})}
                                onSubmitEditing={this.handleAddComment} />
                    
                    <TWF onPress={() => this.setState({editMode: false })}>
                        <Icon name="times" size={15} color='#555' />
                    </TWF>
                </View>
            )
        } else {
            commentArea = ( 
                <TWF onPress={() => this.setState({editMode: true})}>
                    <View style={styles.container}>
                        <FontAwesome name="camera" size={23} color="#FFF" />
                        <Text style={styles.caption}>
                            Adicione um comentário...
                        </Text>
                    </View>

                </TWF>
            )
        }
        return (
            <View style={{flex: 1}}>
                 {commentArea}
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
    input: {
        width: '90%'
    }
})

