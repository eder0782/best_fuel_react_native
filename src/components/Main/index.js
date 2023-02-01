import React from "react";
import{View,Image,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import { useState,useRef } from 'react';
import Result from "../Result";


export default function Main(){
    const[alcool,setAlcool]=useState(0.00);
    const[gasolina,setGasolina]=useState(0.00);
    const[modalVisible,setModalVisible]=useState(false);
    const[result,setResult] = useState(0.00);
    const inpAlcool =useRef(0);
    const inpGasolina = useRef(0);

    function calcular(){
        try {
            // let valAlcool=inpAlcool.current.toString().replace(',','.');
            // let valGasolina=inpGasolina.current.toString().replace(',','.');
            let resultado= parseFloat(alcool)/parseFloat(gasolina);
            // console.log(inpAlcool.current)
            // console.log(valGasolina)    
            // console.log(resultado)
            if(!isNaN(resultado)){
                setResult(resultado.toFixed(2));
                // setAlcool(parseFloat(valAlcool))
                // setGasolina(parseFloat(valGasolina))
                setModalVisible(true);

                return;
            }
    
            alert('Os valores fornecidos são inválidos!');
            
        } catch (error) {
            alert('Ocorreu o seguinte erro: '+error);
        }   
       
        
    }

    function limpaForm(){
        inpAlcool.current.clear();
        inpGasolina.current.clear();
        inpAlcool.current.focus();
        // Keyboard.
    }
    

    return(
        <View style={styles.container}>
            <Result 
                Visible={modalVisible} 
                setVisible={setModalVisible} 
                alcool={Number(alcool).toFixed(2)} 
                gasolina={Number(gasolina).toFixed(2)}
                result={result}
                limaForm={limpaForm}
            
            />
            <View style={styles.cabecalho}>
                <Image
                    style={styles.imagem}
                    source={require('../../../assets/logo.png')}
                />
                <Text style={styles.titulo} >Qual Melhor Opção?</Text>

            </View>
            <View style={styles.form}>
                <Text style={styles.labels}>Álcool(preço por litro):</Text>
                <TextInput
                    style={styles.inputs}
                    keyboardType='numeric'
                    value={alcool}
                    onChangeText={setAlcool}
                    // defaultValue="0.00"
                    inputMode='numeric'
                    maxLength={5}
                    placeholder='Ex.: 3.59'
                    ref={inpAlcool}
                />
                <Text style={styles.labels}>Gasolina(preço por litro):</Text>
                <TextInput
                    style={styles.inputs}
                    keyboardType='numeric'
                    inputMode='numeric'
                    value={gasolina}
                    onChangeText={setGasolina}
                    maxLength={5}
                    placeholder='Ex.: 4.99'
                    ref={inpGasolina}
                />
                <TouchableOpacity
                    style={styles.buttonArea}
                    onPress={calcular}
                >
                    <Text style={styles.buttonText}>Calcular</Text>
                </TouchableOpacity>

            </View>

            
        
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        // justifyContent:'center',
        justifyContent:'center',
        
        // height:'100%'

    },
    cabecalho:{
        alignItems:'center',
        justifyContent:"center",
        marginBottom:20
    },
    imagem:{

    },
    titulo:{
        color:'#fff',
        margin:20,
        fontSize:25,
        fontWeight:'bold'
    },
    
    inputs:{
        backgroundColor:"#fff",
        height:50,
        marginBottom:30,
        borderRadius:5,
        paddingLeft:20,
        
        fontSize:20
        // width:350

    },
    
    form:{
        width:'80%'

    },
    labels:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:7,
        

    },
    buttonArea:{
        
        backgroundColor:'#fa3c08',
        height:50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:25,
        fontWeight:'bold'


    }

})