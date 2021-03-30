import React from 'react'
import { View, Text } from 'react-native'

const BottomNavigationBar = () => {
    return (
        <View style={{position:'absolute',bottom:0,height:65,backgroundColor:'red',width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
           <View style={{width:'20%',backgroundColor:'green'}}></View>
           <View style={{width:'20%',backgroundColor:'green'}}></View>
           <View style={{width:65,height:65,backgroundColor:'white',top:-30,borderRadius:100,elevation:5}}></View>
           <View style={{width:'20%',backgroundColor:'green'}}></View>
           <View style={{width:'20%',backgroundColor:'green'}}></View>
        </View>
    )
}

export default BottomNavigationBar
