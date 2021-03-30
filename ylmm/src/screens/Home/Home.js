import React from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import BottomNavigationBar from '../../components/BottomNavigationBar'
import FloatingActionButton from '../../components/FloatingActionButton'
import Card from '../../components/PostCard'

const Home = () => {
    return (
        <View style={[{height:'100%'},{backgroundColor:EStyleSheet.value('$UserColor')}]}>
            <FloatingActionButton></FloatingActionButton>
          
        </View>
    )
}

export default Home
