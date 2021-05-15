import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export const ButtonComponent = ({title, onPress, position = "br"}) =>{
    //console.log(title);
    console.log(onPress);
    
    return(
        <TouchableOpacity 
        style = {[styles.fabLocation, (position == "br")? styles.right : styles.left]} 
        onPress={ onPress }>
            <View style = {styles.fab}>
                <Text style = {styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#FF0000',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        shadowColor: '#000',
        elevation: 8
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    
    fabLocation: {
        position: 'absolute',
        bottom: 20,
    },
    left:{
        left: 20
    },
    right:{
        right: 20
    }
})