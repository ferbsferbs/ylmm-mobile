import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, Platform } from 'react-native';

let { height, width } = Dimensions.get('window');

EStyleSheet.build({

    /* //////////////////////////////////
                CLASES GLOBALES
    ////////////////////////////////////*/

    $MainFont: 'Gotham-Book',
    $colorFan: '#4b14f3',

    /* //////////////////////////////////
                COMPONENTES
    ////////////////////////////////////*/

    /* GeneralButton.js */

    $btnGeneral: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "85%",
        paddingVertical: 15,
        paddingBottom: Platform.OS === 'ios' ? 10 : 15,
        marginTop: 20,
        borderRadius:160,
        borderWidth: 1,
    },

    $btnGeneralText: {
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: '$MainFont',
        fontWeight: '300',
    },

    /* CAROUSEL */

    $CarImageBackground: {},

    $CarContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    $CarBarContainer: {
        position: 'absolute',
        zIndex: 2,
        bottom: 70,
        flexDirection: 'row',
    },
    $CarTrack: {
        backgroundColor: '#ffffff30',
        overflow: 'hidden',
        height: 10,
        width: 10,
        borderRadius: 100
    },

    $CarBar: {
        backgroundColor: '#fff',
        height: 10,
        width: 10,
        position: 'absolute',
        left: 0,
        top: 0,
    },


       /* FloatingActionButton.js */

       $FloatingContainer: {
            position: 'absolute',
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            right: 30,
            bottom: 30 , 
            borderRadius : 50 , 
            shadowColor: "#ffffff",
            shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 4
        },

        /* MODAL CONFIRM LOGOUT*/ 

        $ModalExit:{
            marginTop: 22 , 
            height:'27%' ,
            width : '80%', 
            backgroundColor:'white'  , 
            padding : 25 , 
            borderWidth:0.2 , 
            borderColor : 'black' ,
            shadowColor: "#000",
            shadowOffset: {
	             width: 0,
	            height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11
        }

});
