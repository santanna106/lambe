import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Alert
} from 'react-native'

export default class Comments extends Component {
    render() {
        const view = []
        let i = 0;
        if(this.props.comments){
           this.props.comments.forEach(element => {
                const comment = (
            
                    <View style={styles.commentContainer} key={i} > 
                        <View>
                            <Text style={styles.nickname}  >{element.nickname}</Text>
                        </View>
                        <View>
                            <Text  style={styles.comment} >{element.comment}</Text>
                        </View>
                    </View>
                )

                i++
                
                view.push(comment)
         
                
            })
            

            console.warn(view[0])
        }
        return (
                <View style={styles.container}>
                    {view}
                </View>
            )
           
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding:10,
        flexDirection: 'column'
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    nickname: {
        marginLeft: 30,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555',
        marginLeft: 5,
    }
})