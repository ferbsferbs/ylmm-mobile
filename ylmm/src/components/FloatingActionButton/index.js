import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
//test

const FloatingActionButton = (props) => {
    
    return (
        <View onTouchEndCapture={()=>alert(props.accountType)} style={{position:'absolute',bottom:10,left:10,backgroundColor:'red',width:50,height:50,elevation:10,borderRadius:100}}>
          
        </View>
    )
}


const mapStateToProps = (state) => {
  const {AuthReducer} = state;
  return {
    accountType: AuthReducer.accountType,

  
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(FloatingActionButton);