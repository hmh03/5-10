import { StatusBar } from "expo-status-bar";
import { View ,StyleSheet, Text, Image} from "react-native";    

import React from "react";
import { TextInput } from "react-native-gesture-handler";
const home = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={styles.input} placeholder="Search"/>
                <Image source={require('../assets/1.png')} style={{margin: 0}} />
            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flexDirection: "row",
        flex:1,
        justifyContent: "center",
        // paddingTop: 100
    },
    input:{
        backgroundColor: "#E5E5E5",
        width:263,
        height: 48,
        paddingLeft: 20,
        marginLeft: 20,

    },
    img:{
        height:48,
        width: 48,
        backgroundColor: '#a58eff'
    }

});
export default home;