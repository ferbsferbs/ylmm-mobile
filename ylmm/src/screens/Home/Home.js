import React from 'react'
import { View, Text } from 'react-native'
import BottomNavigationBar from '../../components/BottomNavigationBar'

const Home = () => {
    return (
        <View style={{height:'100%'}}>
            <BottomNavigationBar></BottomNavigationBar>
            <Text>Home</Text>
        </View>
    )
}

export default Home
