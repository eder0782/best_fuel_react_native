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
                        <Text style={styles.titulo1}>Compensa usar {props.result<=0.7? 'Álcool':'Gasolina'}</Text>
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
        // marginTop: 22,
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
        marginBottom:20

    },
    titulo1:{
        color:"green",
        fontSize:30,
        marginBottom:40

    },
    titulo2:{
        color:'#fff',
        marginBottom:10,
        fontSize:30
        

    },
    precosComb:{
        color:'#fff',
        fontSize:25,
        marginBottom:10


    },
    
    buttoArea:{
        borderColor:"#fa3c08",
        borderWidth:3,
        marginTop:30,
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
        




    },
    buttonText:{
        color:'#fa3c08',
        fontSize:20,
        fontWeight:'bold'

    }

})