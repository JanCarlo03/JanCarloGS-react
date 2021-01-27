//importamos react
import React, { Component } from 'react';
//importar los componentes nativos de react
//declaramos styleSheet 
import {View, Text, Pressable, StyleSheet } from 'react-native';

//declaramos nuestro componente de tipo class

class CoinsScreen extends Component{
    //Declaramos una funcion para llamar con props la vista de detalle
    handlePress = () => {
        console.log("vamos a detalle, this.props");
        this.props.navigation.navigate('DetailsComponent')
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.btnText}>Mi primer pantalla realizado con los alumnos del DSM-54</Text>
                <Pressable style = {styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Ir a detalle</Text></Pressable>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor:"blue"
    },
    btn:{
        padding: 8,
        backgroundColor: "red",
        borderRadius: 8,
        margin: 16,
    },
    btnText:{
        color:"#fff",
        textAlign:"center",

    }
})

export default CoinsScreen;
