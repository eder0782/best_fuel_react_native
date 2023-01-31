import React from "react";
import { View,Text,Modal,Image,StatusBar, StyleSheet, TouchableOpacity } from "react-native";



export default function Result(props){    
    
    return(
        <View style={StyleSheet.container}>
            <StatusBar
            hidden={false}
            backgroundColor="black"
            barStyle='light-conten'
            animated={true}

            />
            <Modal 
                animationType="slide"
                visible={props.Visible}
                style={StyleSheet.container}            
            
            >
                <View style={styles.container}>
                    <View style={styles.modalView}>
                    <Image
                        source={require('../../../assets/gas.png')}
                        style={styles.imagem}
                        />
                        <Text style={styles.titulo1}>Conpensa usar {props.result<=0.7? 'Álcool':'Gasolina'}</Text>
                        <Text style={styles.titulo2}>Com os preços:</Text>
                        <Text style={styles.precosComb}>Álcool: {props.alcool}</Text>
                        <Text style={styles.precosComb}>Gasolina: {props.gasolina}</Text>    
                        <TouchableOpacity
                            style={styles.buttoArea}  
                            onPress={()=>props.setVisible(!props.Visible)}                  
                        >
                            <Text style={styles.buttonText}>Calcular Novamente</Text>

                        </TouchableOpacity>

                    </View>
                </View>
               

            
            </Modal>

        </View>
    )

}


const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: '#000',
    },
    modalView: {
        flex:1,
        width:'100%',
        
        backgroundColor: '#000',
        justifyContent:'center',
        alignItems: 'center',
      
      },
    imagem:{

    },
    titulo1:{

    },
    titulo2:{

    },
    precosComb:{

    },
    
    buttoArea:{
        borderColor:"#fa3c08",
        borderWidth:3,



    },
    buttonText:{
        color:'#fa3c08'

    }

})